const mysql = require('mysql');

const db = mysql.createConnection({
    host: "gansprototype.clc26y9lpo9k.ap-southeast-1.rds.amazonaws.com",
    user: "admin",
    password: "password",
    database: "gans_prototype",
  });

exports.databaseConnection = db;