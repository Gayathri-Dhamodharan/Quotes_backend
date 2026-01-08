const mongoose = require("mongoose");

const quotesSchema= new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
})

const QuotesModel= mongoose.model("quotes",quotesSchema);
module.exports={QuotesModel};