const mysql = require('mysql');
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
  });

exports.databaseConnection = db;