const express = require('express');
var cors = require('cors');
const stripe = require('stripe')


const app = express();
app.use(cors())
app.use(express.static("public"));
app.use(express.json())


app.post('/checkout', async (req, res)=>{
    console.log(req.body)
})

app.listen(4000, ()=> console.log('Listening on port 4000'));
