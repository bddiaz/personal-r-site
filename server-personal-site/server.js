const express = require('express');
const cors = require('cors');
const stripe = require('stripe');
const mysql = require("mysql");
const { mix } = require('framer-motion');
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
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const phone_number = req.body.phone_number;
  const email = req.body.email;
  const order_items = req.body.order_items;
  const payment_type = req.body.payment_type;
  const date_placed = req.body.date_placed;
  const due_date = req.body.due_date;

  // for order_items table: 
  const pork_quantity = order_items[3].quantity;
  const beans_quantity = order_items[2].quantity;
  const mixed_quantity = order_items[0].quantity;
  const spinach_quantity = order_items[5].quantity;
  const jalapeno_quantity = order_items[4].quantity;
  const loroco_quantity = order_items[1].quantity;
  let total_quantity = 0
  for (let i = 0; i < 6; i++) {
    total_quantity += order_items[i].quantity;
  }

  db.query('INSERT INTO order_items (order_size,pork_quantity, beans_quantity, mixed_quantity, spinach_quantity, jalapeno_quantity, loroco_quantity, side1_quantity, side2_quantity, notes) VALUES (?,?,?,?,?,?,?,?,?,?)',
    [total_quantity, pork_quantity, beans_quantity, mixed_quantity, spinach_quantity, jalapeno_quantity, loroco_quantity, 0, 0, ''],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log('inserted order items into database')
      }
    }
  )

  db.query('INSERT INTO costumers (first_name, last_name, phone_number, email) VALUES (?,?,?,?)',
    [first_name, last_name, phone_number, email],
    (err, result) => {
      if (err) {
        // console.log("Connected!")
        console.log(err);
      } else {
        res.send({ data: "/pupusas/" });
        console.log('inserted costumer databse')
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
