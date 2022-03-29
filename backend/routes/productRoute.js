const express = require('express'); 
const { authenticatedUser, admin} = require('../middleware/authMiddleware');

const { getallProducts , 
    createProduct, 
    updateProduct, 
    getProductDetails,
    getRelatableProducts, 
    deleteProduct, 
    getAdminProducts , 
    createProductReview, 
    getProductReviews, 
    deleteReview } = require('../controller/product');

const router = express.Router(); 

router.route("/products").get(getallProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/products/:id/relatableProducts").get(getRelatableProducts);

router.route("/products/new").post(authenticatedUser, createProduct);

router.route("product/:id").put(authenticatedUser, admin, updateProduct);

router.route("/admin/product/:id").delete(authenticatedUser, admin, deleteProduct);

router.route("/admin/products").get(getAdminProducts);
router.route("/review").put(authenticatedUser, createProductReview);
router.route("/reviews").get(getProductReviews).delete(authenticatedUser, deleteReview);

module.exports = router;