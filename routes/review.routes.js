const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const ReviewController = require("../controllers/review-controller");
const router = express.Router();

router.post("/products/:product_id/review", wrapAsync(ReviewController.store));

module.exports = router;
