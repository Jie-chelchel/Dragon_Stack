const { Pool } = require("pg");
const databaseConfiguration = require("./secret/databaseConfiguration");
const pool = new Pool(databaseConfiguration);

module.exports = pool;

pool.query("SELECT foo FROM generation", (err, res) => {
  if (err) return console.log(err);
  console.log(res.rows);
});
