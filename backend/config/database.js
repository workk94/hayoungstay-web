const mysql = require("mysql2/promise");
const { logger } = require("./winston");
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = {
  pool: pool,
};
