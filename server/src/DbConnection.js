const { Pool } = require('pg');

class DbConnection {
    pgPool;

    constructor() {
    }
    async connectAndQuery(query) {
        this.pgPool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'password',
            database: 'account-app',
            idleTimeoutMillis: '3000'
        });
        const client = await this.pgPool.connect()
        const result = await client.query(query).then(result => result.rows);
        return result;
      }
}

module.exports = { DbConnection };