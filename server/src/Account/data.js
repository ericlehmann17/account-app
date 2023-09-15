const {DbConnection} = require('../DbConnection');
// accounts = []
// for(var i=0; i<10; i++){
//   accountId = i.toString().padStart(6, '0');
//   account = {
//     id: accountId,
//     name: "Test" + i,
//     password: "Test" + i,
//     email: "TestEmail" + i+"@test.com",
//     transactions: transactions.filter(transaction => transaction.accountId == accountId),
//     type: i%2 == 0 ? "Checking" : "Savings"
//   };
//   accounts.push(account);
// };

// instances will be able to query the accounts table
class AccountsData {
  dbConnection;

  constructor() {
    this.dbConnection = new DbConnection();
  };
  
  async getAccounts() {
    const query = {
      text: "SELECT * FROM accounts"
    }
    return await this.dbConnection.connectAndQuery(query);
  };

  getAccountById(id) {
    const query = {
      text: "SELECT * FROM accounts WHERE accounts.account_id = $1",
      values: [id]
    };
    return this.dbConnection.connectAndQuery(query);
  };

}


module.exports = { AccountsData }

