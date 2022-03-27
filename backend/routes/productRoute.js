const express = require('express'); 
const { authenticatedUser, admin} = require('../middleware/authMiddleware');

const { getallProducts , 
    createProduct, 
    updateProduct, 
    getProductDetails,
    getRelatableProducts, 
    deleteProduct, 
    getAdminProducts} = require('../controller/product');

const router = express.Router(); 

router.route("/products").get(getallProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/products/:id/relatableProducts").get(getRelatableProducts);

router.route("/products/new").post(authenticatedUser, createProduct);

router.route("product/:id").put(authenticatedUser, admin, updateProduct);

router.route("/admin/product/:id").delete(authenticatedUser, admin, deleteProduct);

router.route("/admin/products").get(getAdminProducts);
module.exports = router;