const express = require("express")
const connection = require("./config/db");
const quoteRoutes = require("./router/quotesRoute");
// middlewware
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors(" "));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/quotes",quoteRoutes)

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
connection();