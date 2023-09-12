/*const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const mysql = require("mysql2");

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

/*app.get('/', function (req, res) {

    connection.getConnection(function (err, connection) {
    connection.query('create database ' + a, function (error, results, fields) {

      if (error) {res.send("database exists")};

      res.send(results);
    });
  });
});


app.get('/', function (req, res) {

    console.log(req.body.name);

    return res.json({ ok: true });
});

app.listen(4000, () => {
 console.log('Go to http://localhost:4000/ so you can see the data.');
});*/

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({
  origin: 'https://localhost:4000/', // Replace with your app's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (if needed)
}));

app.get('/api/data', (req, res) => {
// Handle your API logic here and send a response
res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
