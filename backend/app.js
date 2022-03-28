const express = require('express'); 
const app = express();
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error')
const cloudinary = require('cloudinary');
const uploadRoutes = require('./routes/uploadRoute');
const path = require('path');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config();

connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });


app.use(express.json());
app.use(cookieParser());
app.use(fileupload());
const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
const payment = require('./routes/paymentRoute');
const fileUpload = require('express-fileupload');


app.use("/",product);
app.use("/", user)
app.use("/",uploadRoutes);
app.use("/",order);


//middleware 
app.use(errorMiddleware);

module.exports = app;

