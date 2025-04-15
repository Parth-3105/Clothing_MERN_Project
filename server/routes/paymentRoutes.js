const express = require("express");
const Stripe = require("stripe");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-payment-intent", async (req, res) => {
  try {
      const { amount } = req.body;
      if (!amount) {
          return res.status(400).json({ error: "Amount is required" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
          amount, // Ensure this is in cents
          currency: "inr",
      });

      res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

module.exports = router; // Use module.exports instead of export default
