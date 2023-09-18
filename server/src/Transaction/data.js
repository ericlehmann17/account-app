const { DbConnection } = require('../DbConnection');


class TransactionsData {
  dbConnection;
  constructor() {
    this.dbConnection = new DbConnection();
  }

  async getTransactionsByAccountId(accountId) {
    const query = {
      text: 'SELECT * FROM transactions WHERE account_id = $1',
      values: [accountId]
    }
    return await this.dbConnection.connectAndQuery(query);
  }

}



module.exports = { TransactionsData };