const express = require("express");
const AuthController = require("../controllers/auth-controller");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.post("/register", wrapAsync(AuthController.register));
router.post("/login", wrapAsync(AuthController.login));

module.exports = router;
