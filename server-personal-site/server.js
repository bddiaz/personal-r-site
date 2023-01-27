const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
const mysql = require("mysql");
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())


const db = mysql.createConnection({
    host: "192.168.1.236",
    user: "remote",
    password: "password",
    database: "pupusas",
});


app.post('/newOrder', async (req, res) => {
    console.log(req.body)
})

app.listen(4000, () => console.log('Listening on port 4000'));
