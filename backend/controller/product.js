const ApiFeatures = require('../utils/apifeatures');
const Product = require("../models/productModel");
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const cloudinary = require('cloudinary');

//create product 
exports.createProduct = async (req,res,next) =>{

    req.body.user = req.user.id;
    console.log(req.body.user);

    const product = await Product.create(req.body);

    res.status(201).json({
        success:"true",
        product,
        user
    });
};

//show all products
exports.getallProducts = async (req, res) => {
    const resultperpage = 8;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter(); 

        
    const products = await Product.find();
    
    res.status(201).json({
        success:"true",
        products,
        productCount,
    });
};

// relatable products 
exports.getRelatableProducts = async(req,res,next) => { 
    const productCount = await Product.countDocuments(); 

    const products = await Product.aggregate([{'$sample' : {'size' : 2}}]);

    if(!products){
        return next(new ErrorHandler("Products coming along", 400));
    }

    res.status(200).json({
        success: true, 
        products,
        productCount,
        message: "Product displayed"
    });
}; 

//update product 
exports.updateProduct = async (res,req,next) => {
    const foundProduct = await Product.findById(req.params.id); 

    if(!foundProduct){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        });
    }

    foundProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true, 
        useFindAndModify: true
    });

    res.status(200).json({
        success: true, 
        foundProduct
    });

};

//get product details
exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  }; 


//delete product 
exports.deleteProduct = async(req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
       return next(new ErrorHandler("Product Not Found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted"
    });
}; 

