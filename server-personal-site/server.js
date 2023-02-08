import { handleAddCostumer, handleAddOrderItems } from './databaseQueries.js';
import express from 'express'
import cors from 'cors'
// const cors = require('cors');
// const stripe = require('stripe');
// const mysql = require("mysql2");
// const { mix } = require('framer-motion');
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())




app.post('/newOrder', async (req, res) => {
  // console.log(req.body)
  const order_items = req.body.order_items;
  const payment_type = req.body.payment_type;
  const date_placed = req.body.date_placed;
  const due_date = req.body.due_date;
  // console.log('tsls')
  try {
    const costumerId = await handleAddCostumer(req)
    const orderId = await handleAddOrderItems(req.body.order_items)

    // console.log('costumer id is: ', costumerId)
    // console.log('order id is: ', orderId)
  } catch (err) {
    res.send({ data: 'fails' })
    console.log('err is: ', err)
  }

})

app.listen(4000, () => console.log('Listening on port 4000'));
