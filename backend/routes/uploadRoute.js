const path = require('path');
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const router = express.Router()

router.use(cors()); 
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/")
//   },
//   filename(req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     )
//   },
// })

// function checkFileType(file, cb) {
//   const filetypes = /jpg|jpeg|png/
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//   const mimeType = filetypes.test(file.mimetype)

//   console.log("Upload Image", extname, mimeType)
//   if (extname && mimeType) {
//     return cb(null, true)
//   } else {
//     return cb("Images only")
//   }
// }

// const upload = multer({
//   storage,
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb)
//     console.log("Fine");
//   },
// })

// router.post("/products/upload", upload.single("image"), (req, res, err) => {
//   if(err){
//     res.send(err);
//   }
//   res.send(`${req.file.path}`)
// })

// const upload = multer({storage}).single("file");
// router.post("/products/upload", (req, res) => {
//   upload(req,res, (err) => {
//     if(err){
//       return res.json(err);
//     }
//     else{
//       return res.send(`${req.file.path}`);
//     }
//   })
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })


router.post('/products/upload', upload.single('file'), function (req, res) {
  console.log("uploaded");
  res.json({message: "Success"})
})

module.exports = router;