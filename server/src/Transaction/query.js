const transactions = require('./data.js');

const transactionsQueryResolver = { 
    transactions: (args) => {
        return {
          transactions: transactions,
          count: transactions.length
        }
      }
};

module.exports = transactionsQueryResolver;