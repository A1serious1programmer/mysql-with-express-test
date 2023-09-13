/*
var a = "2022UEA6503";
var b = "bill3";

var c = "2022Uea8911"

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'ojasisbest1!',
  database : a
});

var table;

app.get('/', function (req, res) {

    connection.getConnection(function (err, connection) {
    connection.query('create database ' + a, function (error, results, fields) {

      if (error) {res.send("database exists")};

      res.send(results);
    });
  });
});*/

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});

