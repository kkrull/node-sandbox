const process = require('process');
const NForceFactory = require('./nforcejs-factory');

const factory = NForceFactory.forEnvironment(process.env.NODE_ENV);
const org = factory.createConnection('http://localhost:3000/oauth/_callback');
org
  .authenticate(factory.authenticationOptions())
  .then((oauth) => org.createStreamClient({ oauth }))
  .then((client) => {
    const accs = client.subscribe({
      isEvent: true,
      replayId: -2, //Events from the last 72 hours
      topic: 'ExpenseUpdatedPlatformEvent__e',
    });

    accs.on('error', (err) => {
      console.log('Subscription failed', err);
      client.disconnect();
    });

    accs.on('data', (data) => {
      console.log('Received platform event:', JSON.stringify(data, null, 2));
    });
  });
