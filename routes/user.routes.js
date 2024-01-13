const express = require("express");
const UserController = require("../controllers/user-controller");
const wrapAsync = require("../utils/wrapAsync");
const { isAuth } = require("../middlewares/isAuth");
const router = express.Router();

router.get("/users", isAuth, wrapAsync(UserController.index));
router.get("/users/:user_id", isAuth, wrapAsync(UserController.show));
router.post("/users/", isAuth, wrapAsync(UserController.store));

module.exports = router;
