const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const ReviewController = require("../controllers/review-controller");
const { validateReview } = require("../middlewares/validator");
const { isAuth } = require("../middlewares/isAuth");
const router = express.Router();

router.post(
  "/products/:product_id/review",
  isAuth,
  validateReview,
  wrapAsync(ReviewController.store)
);

router.delete(
  "/products/:product_id/review/:review_id",
  isAuth,
  wrapAsync(ReviewController.delete)
);

module.exports = router;
