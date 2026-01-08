const { QuotesModel } = require("../model/quotes");
const getQuotes = async(req,res)=>{
    try {
        const quotes = await QuotesModel.find();
        res.status(200).json({
            message: "Quotes fetched successfully",
            data: quotes
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 
const getQuotesId = async(req,res)=>{
    try {
        const quotes = await QuotesModel.findById(req.params.id);
        res.status(200).json({
            message: "Quotes fetched successfully",
            data: quotes
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 



const createQuote = async (req, res) => {
  try {
    const { author, text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Quote text is required" });
    }

    const quote = await QuotesModel.create({
      author,
      text,
    });

    res.status(201).json({
      message: "Quote created successfully",
      data: quote,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteQuotesId = async(req,res)=>{
    try {
        const quotes = await QuotesModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Quotes deleted successfully",
            data: quotes
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

const updateQuote=async(req,res)=>{
    try {
        const quotes=await QuotesModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
       res.status(200).json({
        message:"Quotes updated successfully",
        data:quotes,
       })
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createQuote,getQuotes,getQuotesId,deleteQuotesId,updateQuote };