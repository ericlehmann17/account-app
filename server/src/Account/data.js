transactions = require('../Transaction/data.js');

accounts = []
for(var i=0; i<10; i++){
  account = {
    id: i.toString(),
    name: "Test" + i,
    password: "Test" + i,
    email: "TestEmail" + i,
    transactions: transactions.filter(transaction => transaction.accountId == i.toString()),
    type: i%2 == 0 ? "Checking" : "Savings"
  };
  accounts.push(account);
};

module.exports = accounts;