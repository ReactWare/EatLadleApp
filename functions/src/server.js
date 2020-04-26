const express = require('express');
const app = express();
app.use(express.json());
const { TEST_SECRET_KEY } = require('../server.config');
const stripe = require('stripe')(TEST_SECRET_KEY);

// Express Server Methods
app.post('/create-charge', async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { source } = req.body;
    const currency = 'usd';

    const calculateOrderAmount = kit => {
      // kit = [ { id }, etc. ]
      // use the id to look-up amount from Firestore
      const amount = 6400; // replace with async call
      return amount;
    };
    let items = {};
    const amount = calculateOrderAmount(items);

    // Create a charge with the token
    const charge = await stripe.charges.create({
      amount,
      currency,
      source,
    });
    res.send(charge);
  } catch (error) {
    console.log('Error:', error);
    console.log('Error Type:', error.type);
    console.log('Error Code:', error.code);
  }
});

module.exports = app;
