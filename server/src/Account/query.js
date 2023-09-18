const { AccountsData } = require ('./data.js');


const accountsQueryResolver = {
    accounts: async (args) => {
        const accountsData = new AccountsData();
        const accounts = await accountsData.getAccounts();
        return {
            accounts: accounts,
            count: accounts.length
        }
    },
    account: async (args) => {
        const accountsData = new AccountsData();
        const account = await accountsData.getAccountById(args.account_id).then(res => res[0]);
        return account
    }
};

module.exports = accountsQueryResolver;