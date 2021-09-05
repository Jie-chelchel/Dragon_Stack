const { Pool } = require("pg");
const databaseConfiguration = require("./secret/databaseConfigurations");
const pool = new Pool(databaseConfiguration);

module.exports = pool;
