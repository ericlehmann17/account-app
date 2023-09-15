const { AccountsData } = require ('./data.js');


const accountsQueryResolver = {
    accounts: async (args) => {
        const accountsData = new AccountsData();
        const accounts = await accountsData.getAccounts();
        console.log(accounts);
        return {
            accounts: accounts,
            count: accounts.length
        }
    },
    account: async (args) => {
        const accountsData = new AccountsData();
        const account = await accountsData.getAccount(args.id);
        return account
    }
};

module.exports = accountsQueryResolver;