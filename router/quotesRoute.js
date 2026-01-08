const express = require("express");
const router = express.Router();

const {
  createQuote,
getQuotes,
  getQuotesId,
  deleteQuotesId,
  updateQuote,
 
} = require("../controller/quotesController");

router.post("/", createQuote);
router.get("/", getQuotes);
router.get("/:id", getQuotesId);
router.put("/:id", updateQuote);
router.delete("/:id", deleteQuotesId);

module.exports = router;