# AngularExternalLogin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Environment Setup

**Note: You must set up the environment before this app will run.**

Either edit `src/environments/environment.ts` with the User Pool and App Client settings for your Cognito User Pool,
or create your own file in `src/environemnts/environment.<name>.ts` and run with `npm start -- --environment=<name>`.
An entry will need to be added to `.angular-cli.json`.


## Running

Type `npm run` to see which `start:<environment>` scripts exist.  Run one of these (after creating the associated environment file, if necessary)
to have the app be configured for that environment.  You will also need to import the correct top-level service module for which
Identity Provider you are using, inside `src/app/app.module.ts`.  For example: use `IdentityServerServiceModule` for the `identity-server-demo`
environment, which is started with `npm run start:identity-server-demo`.
