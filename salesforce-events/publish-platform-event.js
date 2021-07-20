const nforce = require('nforce');
const process = require('process');
const NForceFactory = require('./nforcejs-factory');

function parseArguments(argv) {
  const expenseIds = argv.slice(2);
  if (expenseIds.length === 0) {
    return { expenseId: 'EXP-00042' };
  } else if (expenseIds.length !== 1) {
    throw Error(`Too many expenseIds: ${expenseIds}`);
  }

  return { expenseId: expenseIds[0] };
}

const { expenseId } = parseArguments(process.argv);

const factory = NForceFactory.forEnvironment(process.env.NODE_ENV);
const org = factory.createConnection('http://localhost:3000/oauth/_callback');
org
  .authenticate(factory.authenticationOptions())
  .then((oauth) => {
    const acc = nforce.createSObject('ExpenseUpdatedPlatformEvent__e');
    acc.set('ExpenseId__c', expenseId);
    return org.insert({ sobject: acc, oauth });
  })
  .then((response) => console.log('Inserted event:', response))
  .catch((error) => console.log('Insert failed:', error));
