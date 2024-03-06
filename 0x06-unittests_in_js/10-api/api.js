const express = require('express');

const app = express();
const PORT = 7865;
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`)

});

app.get('/available_payments', (_req, res) => {
  const paym = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paym);
});

app.post('/login', (req, res) => {
  let name = '';
  if(req.body){
  name = req.body.userName;
  }
  res.send(`Welcome ${name}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;