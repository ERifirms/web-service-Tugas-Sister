const express = require("express");
const UserController = require("../controllers/user-controller");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get("/users", wrapAsync(UserController.index));
router.get("/users/:user_id", wrapAsync(UserController.show));
router.post("/users/", wrapAsync(UserController.store));

module.exports = router;
