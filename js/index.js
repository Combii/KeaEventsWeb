const express = require('@types/express');
const app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + `/index.html`, function (err) {
    });
});

