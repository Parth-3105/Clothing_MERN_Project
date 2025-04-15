const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes"); // Fix import issue
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes= require("./routes/reviewRoutes")

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/order", orderRoutes);
app.use('/api/reviews', reviewRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the MERN Stack API");
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
