const ApiFeatures = require('../utils/apifeatures');
const ErrorHandler = require('../utils/errorhandler');
const User = require('../models/userModel');
const asynchandler = require('express-async-handler');

//register a user 
exports.registerUser = async(req, res, next) => {
    
    const {name, email, password} = req.body;

    const userExists = await User.findOne({ email });

    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,email,password
    });

    const token = user.getJWTtoken();
    res.status(201).json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token
    })

}

exports.loginUser = async (req, res, next) => {

    const {email, password} = req.body;

    if(!email || !password){
        return next(new Error("Enter the email and password"));
    }
    
    const user = await User.findOne({ email }).select("+password");
    
    if(!user){
        return next(new Error("Invalid email or password"));
    }

    const isPasswordMatched = await user.matchPassword(password);

  if (!isPasswordMatched) {
    return next(new Error("Invalid email or password"));
  }

    const token = user.getJWTtoken();
    res.status(200).json({
            success: true,
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token
        });

}

//logout 
exports.logoutUser = asynchandler(async (req,res,next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true, 
        message: "Logged Out"
    });
})