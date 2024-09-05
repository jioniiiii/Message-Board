const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost", 
    user: "nisgia",
    database: "top_user",
    password: "759153852",
    port: 5432 
  });