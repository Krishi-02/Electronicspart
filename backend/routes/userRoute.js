const express= require('express'); 
const { registerUser, loginUser, logoutUser, getUserDetails, getAllUser, deleteUser} = require('../controller/userController');
const { authenticatedUser, admin} = require('../middleware/authMiddleware');
const router = express.Router();

router.route("/account/register").post(registerUser); 
router.route("/account/login").post(loginUser);
router.route("/account").get(authenticatedUser, getUserDetails);
router.route("/account/logout").get(logoutUser);
router.route("/admin/users").get(getAllUser);
router.route("/admin/user/:id").delete(authenticatedUser, admin, deleteUser);

module.exports = router;

