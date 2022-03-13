const express = require('express'); 
const { processPayment, sendStripeApiKey } = require('../controller/paymentController');
const router = express.Router(); 

const { authenticatedUser } = require('../middleware/authMiddleware');

router.route("/payment/process").post(authenticatedUser, processPayment);
router.route("/stripeapikey").get(authenticatedUser, sendStripeApiKey);

module.exports = router;