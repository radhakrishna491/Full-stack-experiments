const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dummy data (no MongoDB needed for simplicity)
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

// API
app.get("/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
