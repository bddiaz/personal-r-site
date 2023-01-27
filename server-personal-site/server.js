const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
const mysql = require("mysql");
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "remote",
    password: "password",
    database: "pupusas",
});


app.post('/newOrder', async (req, res) => {
    console.log(req.body)
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const email = req.body.email;
    //res.send({data:'test'})

    db.query('INSERT INTO costumers (first_name, last_name, phone_number, email) VALUES (?,?,?,?)',
        [first_name,last_name,phone_number,email],
               (err, result) => {
                    if (err) {
                      console.log("Connected!")
                      console.log(err);
                    } else {
                      res.send({data:"/pupusas/"});
                      console.log('inserted into databse')      
                }
              }
              
        )
      
      
})


//function placeNewOrderTest(){
    // function will handle take in new orders
    // need to check if costumer exists,
    // if not, create new costumer, then c
    // if yes, 
//}

app.listen(4000, () => console.log('Listening on port 4000'));
