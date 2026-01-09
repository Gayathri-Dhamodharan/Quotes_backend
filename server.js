const express = require("express");
const connection = require("./config/db");
const quoteRoutes = require("./router/quotesRoute");
require("dotenv").config();
const cors = require("cors");

const app = express();

// ✅ CORS
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/quotes", quoteRoutes);

app.get("/", (req, res) => {
  res.send("Server is running fine");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connection(); // ⬅️ wait for MongoDB

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
