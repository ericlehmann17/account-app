const accounts = require ('./data.js');


const accountsQueryResolver = {
    accounts: (args) => {
        return {
            accounts: accounts,
            count: accounts.length
        }
    },
    account: (args) => {
        return accounts.find(account => account.id === args.id)
    }
};

module.exports = accountsQueryResolver;