const path = require('path');
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const router = express.Router()

router.use(cors()); 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'uploads/')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})

var upload = multer({ storage: storage }).single('file')

router.post("/products/upload", (req, res) =>{
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
    res.status(200).send(`${req.file.destination}`)

})
})

module.exports = router;