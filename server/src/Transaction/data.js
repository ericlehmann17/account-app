const { DbConnection } = require('../DbConnection');


class TransactionsData {
  dbConnection;
  constructor() {
    this.dbConnection = new DbConnection();
  }

  getTransactionsByAccountId(accountId) {
    const query = {
      text: 'SELECT * FROM transactions WHERE account_id = $1',
      values: [accountId]
    }
    return this.dbConnection.connectAndQuery(query);
  }

}

let transactionsData = new TransactionsData();
console.log(transactionsData.getTransactionsByAccountId(5));

module.exports = { TransactionsData };