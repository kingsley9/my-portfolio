const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "Lazy808",
  host: "localhost",
  port: 5432,
  database: "portfoliosite",
});

module.exports = pool;
