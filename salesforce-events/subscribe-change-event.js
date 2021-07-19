const process = require('process');
const SForceJSFactory = require('./sforcejs-factory');

const factory = SForceJSFactory.forEnvironment(process.env.NODE_ENV);
const org = factory.createConnection('http://localhost:3000/oauth/_callback');
org
  .authenticate(factory.authenticationOptions())
  .then((oauth) => org.createStreamClient({ oauth }))
  .then((client) => {
    const accs = client.subscribe({
      channel: '/data/Expense__ChangeEvent',
      isCDC: true,
      replayId: -2, //Events from the last 72 hours
    });

    accs.on('error', (err) => {
      console.log('Subscription failed', err);
      client.disconnect();
    });

    accs.on('data', (data) => {
      console.log(
        'Received Change Data Capture event:',
        JSON.stringify(data, null, 2)
      );
    });
  });
