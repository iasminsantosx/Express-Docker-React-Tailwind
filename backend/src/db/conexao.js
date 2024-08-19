//CONEXÃO LOCAL

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

const knex = require("knex")({
  client: "pg",
  connection: {
    host: 'db_officecom',
    port: 5432,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    // ssl: { rejectUnauthorized: false }
  },
});

module.exports = knex;