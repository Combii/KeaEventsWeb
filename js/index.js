const express = require('express');
var path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, '../public/Home')));
app.use(express.static(path.resolve(__dirname, '../public/')));


app.get('/contact', (req, res) => {
    res.send({
        name: "Kea Events",
        email: "kea@mail.com",
        address: "Copenhagen"
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About KEA</h1>');
});

app.listen(3000);

