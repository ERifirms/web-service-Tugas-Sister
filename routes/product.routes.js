const express = require("express");
const ProductController = require("../controllers/products-controller");
const wrapAsync = require("../utils/wrapAsync");
const { validateProduct } = require("../middlewares/validator");
const { isAuth } = require("../middlewares/isAuth");
const router = express.Router();

router.get("/products", wrapAsync(ProductController.index));
router.get("/products/:product_id", isAuth, wrapAsync(ProductController.show));
router.post(
  "/products/",
  isAuth,
  validateProduct,
  wrapAsync(ProductController.store)
);
router.put(
  "/products/:product_id",
  isAuth,
  validateProduct,
  wrapAsync(ProductController.update)
);
router.delete(
  "/products/:product_id",
  isAuth,
  wrapAsync(ProductController.destroy)
);

module.exports = router;
