import { handleAddCostumer, handleAddOrderItems, handleAddOrder, handleAddReceipt } from './databaseQueries.js';
import express from 'express'
import cors from 'cors'
import stripe from 'stripe'
const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())

const payStripe = stripe('sk_test_51MRnrNFy1kJy5dnhprSkhfZTKOiGuNpfl7vOGwpiQuR5kkqWyenE8b2ELpdOGJpLF8OZHHJtHsWtbMOIzYHCFQlx00SxrY66Kr')

const storeItems = new Map([
  [0, { priceInCents: 300, name: "Mixed Pupusa" }],
  [1, { priceInCents: 300, name: "Loroco Pupusa" }],
  [2, { priceInCents: 300, name: "Beans Pupusa" }],
  [3, { priceInCents: 300, name: "Pork Pupusa" }],
  [4, { priceInCents: 300, name: "Jalapeno Pupusa" }],
  [5, { priceInCents: 300, name: "Spinach Pupusa" }]
])


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

app.post('/newCardOrder', async (req, res) => {
  console.log('new card order items: ', req.body.order_items)
  try {
    const session = await payStripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: req.body.order_items.map(item => {
        const storeItem = storeItems.get(item.index)
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: storeItem.name
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: '/success',
      cancel_url: '/cancel'
    })
    res.send({ url: session.url })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: err.message })
  }
})

app.listen(4000, () => console.log('Listening on port 4000'));
