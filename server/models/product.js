const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    brand: String,
    image: String,
    stock: Boolean,
    rating: Number,
    featured: { type: Boolean, default: false },
    bestSeller: { type: Boolean, default: false }, // Mark Best Sellers
    createdAt: { type: Date, default: Date.now }, // Track New Arrivals
  });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
