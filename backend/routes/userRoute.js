const express= require('express'); 
const { registerUser, loginUser, logoutUser } = require('../controller/userController');
const router = express.Router();

router.route("/account/register").post(registerUser); 
router.route("/account/login").post(loginUser);
router.route("/account/logout").get(logoutUser);

module.exports = router;

