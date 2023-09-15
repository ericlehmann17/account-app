const { TransactionsData } = require('./data.js');

const transactionsQueryResolver = { 
    transactions: async (args) => {
      const transactionsData = new TransactionsData();
      const transactions = await transactionsData.getTransactionsByAccountId(args.id);
      return {
        transactions: transactions,
        count: transactions.length
      }
    }
};

module.exports = transactionsQueryResolver;