const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Create a new review
router.post('/', async (req, res) => {
  try {
    const { product, name, text, rating } = req.body;
    const review = new Review({ product, name, text, rating });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all reviews for a specific product
router.get('/', async (req, res) => {
  try {
    const { productId } = req.query;
    if (!productId) {
      return res.status(400).json({ error: 'Product ID is required' });
    }
    const reviews = await Review.find({ product: productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
