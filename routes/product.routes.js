const express = require("express");
const ProductController = require("../controllers/products-controller");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get("/products", wrapAsync(ProductController.index));
router.get("/products/:product_id", wrapAsync(ProductController.show));
router.post("/products/", wrapAsync(ProductController.store));
router.put("/products/:product_id", wrapAsync(ProductController.update));
router.delete("/products/:product_id", wrapAsync(ProductController.destroy));

module.exports = router;
