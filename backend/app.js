const express = require('express'); 
const app = express();
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error')
const cloudinary = require('cloudinary');
const uploadRoutes = require('./routes/uploadRoute');
const path = require('path');
const fileupload = require('express-fileupload');

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
const fileUpload = require('express-fileupload');



const __dirname1 = path.resolve();
app.use("/uploads", express.static(path.join(__dirname1, "/uploads")))

app.use("/",product);
app.use("/", user)
app.use("/",uploadRoutes);
//middleware 
app.use(errorMiddleware);

module.exports = app;

