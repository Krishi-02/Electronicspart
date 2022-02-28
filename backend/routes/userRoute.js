const express= require('express'); 
const { registerUser, loginUser, logoutUser, getUserDetails} = require('../controller/userController');
const { authenticatedUser } = require('../middleware/authMiddleware');
const router = express.Router();

router.route("/account/register").post(registerUser); 
router.route("/account/login").post(loginUser);
router.route("/account").get(authenticatedUser, getUserDetails);
router.route("/account/logout").get(logoutUser);

module.exports = router;

