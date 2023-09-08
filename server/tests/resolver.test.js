const { buildSchema }= require('graphql');
const express = require('express');
const fs = require('fs');
const { graphqlHTTP } = require('express-graphql');
const accountsQueryResolver = require('../src/Account/query');
const transactionsQueryResolver = require('../src/Transaction/query');

const schema = buildSchema(fs.readFileSync('/Users/ericlehmann/Work/repos/account-app/server/schema.graphql', 'utf-8'));

require('isomorphic-fetch');

const app = express();
const root = {
    ...accountsQueryResolver,
    ...transactionsQueryResolver,
}
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));



// before all tests, we need to start the express graphql server
beforeAll(function () {
    // start the express server
    server = app.listen(3000);
});



test("query for all accounts, requesting only specified fields", async () => {
    // graphql query for accounts for specific account fields
    const accountsQuery = 
    `query {
        accounts {
            accounts {
                id
                name
                transactions {
                    id
                    accountId
                    amount
                    type
                }
                type
            }
        }
    }`;
    const result = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: accountsQuery}) //tabnine completion
    })
    .then(res => res.json())
    // test that the response has all expected fields
    .then(res => {
        // test graphql response structure
        expect(res.data.hasOwnProperty('accounts')).toBe(true);
        expect(res.data.accounts.hasOwnProperty('accounts')).toBe(true);
        expect(res.data.accounts.accounts.length).toBe(10)
        // test each account has proper fields
        e = res.data.accounts.accounts[0];
        expect(e.hasOwnProperty('id')).toBe(true);
        expect(e.hasOwnProperty('name')).toBe(true);
        expect(e.hasOwnProperty('transactions')).toBe(true);
        expect(e.hasOwnProperty('type')).toBe(true);
        // test each transaction has proper fields
        t = e.transactions[0];
        expect(t.hasOwnProperty('id')).toBe(true);
        expect(t.hasOwnProperty('accountId')).toBe(true);
        expect(t.hasOwnProperty('amount')).toBe(true);
        expect(t.hasOwnProperty('type')).toBe(true);
    });

});

test('query for all transactions, requesting only specified fields', async () => {
    //query all transactions for specific transaction fields
    const transactionsQuery = 
        `query {
            transactions {
                transactions {
                    id
                    accountId
                    date
                    amount
                }
            }
        }`;
        const result = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({query: transactionsQuery}) //tabnine completion
        })
       .then(res => res.json()) //Lines 56 - 74 were a complete Tabnine pro completion
       .then(res => {
        expect(res.data.hasOwnProperty('transactions')).toBe(true);
        expect(res.data.transactions.hasOwnProperty('transactions')).toBe(true);
        expect(res.data.transactions.transactions.length).toBe(100);
        // test each transaction has proper fields
        e = res.data.transactions.transactions[0];
        expect(e.hasOwnProperty('id')).toBe(true);
        expect(e.hasOwnProperty('accountId')).toBe(true);
        expect(e.hasOwnProperty('amount')).toBe(true);
        expect(e.hasOwnProperty('date')).toBe(true);
       });
});

test('query for a single account given account id, requesting specific fields', async () => {
    accountQuery = 
    `query {
        account(id: "0") {
            id
            name
            transactions {
                id
                accountId
                amount
                type
            }
            type
        }
    }`;

    const result = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: accountQuery}) //tabnine completion
        })
      .then(res => res.json())
      // test that the response has all expected fields
      .then(res => {
        expect(res.data.hasOwnProperty('account')).toBe(true);
        expect(res.data.account.hasOwnProperty('id')).toBe(true);
        expect(res.data.account.hasOwnProperty('name')).toBe(true);
        expect(res.data.account.hasOwnProperty('transactions')).toBe(true);
        expect(res.data.account.hasOwnProperty('type')).toBe(true);
        t = res.data.account.transactions[0];
        expect(t.hasOwnProperty('accountId')).toBe(true);
        expect(t.hasOwnProperty('amount')).toBe(true);
        expect(t.hasOwnProperty('type')).toBe(true);
        expect(t.hasOwnProperty('id')).toBe(true);
      })

      
});

afterAll(() =>{
    //stop the express server
    server.close();
});