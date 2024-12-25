const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:true
    },
    author:{
        type:String,
        trim:true,
        required:true
    }

})




let Quote = mongoose.model('Quote',quoteSchema)
module.exports = Quote;
