transactions = require('../Transaction/data.js');

accounts = []
for(var i=0; i<10; i++){
  accountId = i.toString().padStart(6, '0');
  account = {
    id: accountId,
    name: "Test" + i,
    password: "Test" + i,
    email: "TestEmail" + i+"@test.com",
    transactions: transactions.filter(transaction => transaction.accountId == accountId),
    type: i%2 == 0 ? "Checking" : "Savings"
  };
  accounts.push(account);
};

module.exports = accounts;