const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const fs = require('fs');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const path = require('path');
const accountsQueryResolver = require('./src/Account/query.js')
const transactionsQueryResolver = require('./src/Transaction/query.js')

const app = express().use(cors()).use(json());

const schema = buildSchema(fs.readFileSync(path.join(__dirname, '/schema.graphql'), 'utf-8'));

// resolvers for different types (Account, Transaction, etc) go in the root
// which will be given to the graphql server
const root = {
  ...accountsQueryResolver,
  ...transactionsQueryResolver
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, (err) => {
    if (err) {
        return console.log(err);
    }
  return console.log('Server running on port 3000');
});
