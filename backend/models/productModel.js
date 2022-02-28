const mongoose = require("mongoose"); 

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    imageUrl :{
        type: String, 
        required: true 
    },
    category : {
        type: String,
        required: true
    }, 
    countInStock:{
        type: Number,
        required: true 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt : {
        type: Date,
        default: Date.now 
    }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;