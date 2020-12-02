var express = require('express');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Love.0980',
  database: 'burgers_db',
});

connection.connect(function (err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
