# SalesForce Integration via node.js

Use libraries in node.js to receive events from SalesForce, in order to enable
integration with other applications.

This process–using Platform Events and a custom process–is described in
[Connecting AWS and Salesforce Enables Enterprises to Do More with Customer
Data](https://aws.amazon.com/de/blogs/apn/connecting-aws-and-salesforce-enables-enterprises-to-do-more-with-customer-data/).


## Setup: node.js

Globally:

1. Install [`direnv`](https://direnv.net/)
1. Install `nvm`, possibly via a zsh plugin:
   https://github.com/nvm-sh/nvm#installing-and-updating
1. Install node.js: `nvm install --lts v14.17.3`

In this repository:

1. `npm install`
2. `npm run env:init`, then edit `.envrc` with the values configured in
   SalesForce (see below)
3. `npm run ...` (see below)


## What it can do

### Subscribe to Platform Events with `nforce`

TL;DR - _Create a custom process in Process Builder that creates (and
automatically publishes) a custom Platform Event, and use long-polling to
subscribe to it.  The event refers back to the created/updated record._

Given this subscription configuration:

```javascript
const accs = client.subscribe({
  isEvent: true,
  topic: 'ExpenseUpdatedPlatformEvent__e',
  replayId: -2,
});
```

It outputs:

```shell
$ npm run subscribe-platform-event

> salesforce-events@0.0.1 subscribe-platform-event ...
> NODE_ENV=dev node subscribe-platform-event.js
...
Received platform event: {
  "schema": "oCWawJ8BR1tkxCq6ZxQyQw",
  "payload": {
    "ExpenseId__c": "EXP-00001", /* The record that was updated */
    "CreatedById": "0055e000005DtchAAC",
    "CreatedDate": "2021-07-19T20:14:13.856Z"
  },
  "event": {
    "replayId": 3929322
  }
}
```

Configure SalesForce, as follows:

1. Object Manager: Create `Expense`.
1. Create a Lightning App for Expenses.
   * For the `Expense` object.
   * Add a tab for the app.
1. Create a Connected App for `awsLambda`
   * Add OAuth for the app.
1. Create a Security Token, for your user, in the settings menu.
1. Create an Expense, in the Expense tab/app.
1. Platform Events: Create `ExpenseUpdatedPlatformEvent` with:
   * `ExpenseId`.  __Make sure the field type is Text, to be compatible with
     string-based IDs__ like `EXP-00001`.  _The field type in the Platform Event
     has to be the same as the field type in the original entity, or Process
     Builder will not show it as an option for Field Reference._
1. Process Builder:
   * Criteria: No criteria–just execute the actions!
   * Immediate Action: Create a record
     * Record Type: `ExpenseUpdatedPlatformEvent`
     * Set field `ExpenseId` as a field reference.
   * Activate

#### Reference

* [`nforce`](https://github.com/kevinohara80/nforce)


### Subscribe to Change Data Capture Events with `sforcejs`

TL;DR - _Use long-polling to subscribe to changes in records–without having to
define a Platform Event or a Process–to record the changes._

1. Don't use Process Builder or Platform Events.  Just create the entity
   (`Expense`) that is be tracked, and create the usual Lightning app+tab to do
   CRUD on it.
1. Change Data Management: Add `Expense` to the entiites for which changes are
   tracked.
1. Use `sforcejs` instead of `nforce`, which was waiting on implementing a more
   generic Streaming API in a version 2.0 that never happened.  Subscribe as
   follows:

   ```javascript
   const accs = client.subscribe({
     channel: '/data/Expense__ChangeEvent',
     isCDC: true,
     replayId: -2, //Events from the last 72 hours
   });
   ```
1. Events appear to be strucutred, as follows:
   1. It seems likely that `payload.ChangeEventHeader.changedFields` would
      always be defined, and that subscribers could use it to tell which other
      fields to look up in the event payload.
   1. Has `.payload.<changed field>`, presumably for each updated field, which
      contains the new value.


For example:

```json
Received event: {
  "schema": "UgiaO48sa_YABPmoB3puUQ",
  "payload": {
    "LastModifiedDate": "2021-07-16T22:44:00.000Z",
    "Amount__c": 10, /* Updated field */
    "ChangeEventHeader": {
      "commitNumber": 152750313434,
      "commitUser": "0055e000005DtchAAC",
      "sequenceNumber": 1,
      "entityName": "Expense__c",
      "changeType": "UPDATE",
      "changedFields": [
        "LastModifiedDate",
        "Amount__c" /* Seeing this, you know to look up this field in .payload */
      ],
      "changeOrigin": "com/salesforce/api/soap/52.0;client=SfdcInternalAPI/",
      "transactionKey": "0006ec96-3666-c8c6-a47c-e81607d02650",
      "commitTimestamp": 1626475440000,
      "recordIds": [
        "a005e000004y0fBAAQ"
      ]
    }
  },
  "event": {
    "replayId": 8052880
  }
}
```

#### Reference

* [`sforcejs`](https://github.com/dhulke/sforcejs)
* [Platform Events Developer
  Guide](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_objects_change_data_capture.htm)
  on Change Data Capture Events.
* [Tutorial on Change Data Capture
  Events](https://github.com/abrarsheikhsony/SFDC-change-data-capture)
