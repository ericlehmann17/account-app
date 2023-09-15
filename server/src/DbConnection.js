const { Pool } = require('pg');

class DbConnection {
    pgPool;

    constructor() {
        this.pgPool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'password',
            database: 'account-app',
            idleTimeoutMillis: '3000'
        });
    }
    async connectAndQuery(query) {
        const client = await this.pgPool.connect()
        const result = client.query(query).then(result => {
            return result.rows;
        });
        console.log(result);
        return result;
      }
}

module.exports = { DbConnection };