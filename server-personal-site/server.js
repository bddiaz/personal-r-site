import { handleAddCostumer, handleAddOrderItems, handleAddOrder, handleAddReceipt } from './databaseQueries.js';
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




app.post('/newCashOrder', async (req, res) => {
  try {
    const costumerId = await handleAddCostumer(req)
    const orderItemsId = await handleAddOrderItems(req.body.order_items)
    const orderId = await handleAddOrder(req, orderItemsId, costumerId)
    const receiptId = await handleAddReceipt(orderId, costumerId, 'cash', 'pending')
    console.log('costumer id is: ', costumerId)
    console.log('order items id is: ', orderId)
    console.log('sale id is: ', orderId)
    console.log('receipt id is: ', receiptId)
    res.send({ data: receiptId })
  } catch (err) {
    res.send({ data: 'fails' })
    console.log('err is: ', err)
  }

})

app.listen(4000, () => console.log('Listening on port 4000'));
