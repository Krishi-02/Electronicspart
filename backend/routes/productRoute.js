const express = require('express'); 
const { authenticatedUser, admin} = require('../middleware/authMiddleware');

const { getallProducts , 
    createProduct, 
    updateProduct, 
    getProductDetails, 
    deleteProduct} = require('../controller/product');

const router = express.Router(); 

router.route("/products").get(getallProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/products/new").post(authenticatedUser, createProduct);

router.route("/products/:id").put(authenticatedUser, admin, updateProduct).delete(authenticatedUser, admin ,deleteProduct);


module.exports = router;