const Review = require("../models/review-model");
const Product = require("../models/product-model");

module.exports.store = async (req, res) => {
  const { product_id } = req.params;
  const { ratting, body } = req.body;

  const review = new Review({
    ratting: ratting,
    body: body,
  });

  const product = await Product.findById(product_id);
  product.reviews.push(review);

  await review.save();
  await product.save();

  res.status(201).json(product);
};

module.exports.delete = async (req, res) => {
  const { product_id, review_id } = req.params;

  await Product.findByIdAndUpdate(product_id, {
    $pull: { reviews: review_id },
  });
  await Review.findByIdAndDelete(review_id);

  res.status(200).json({ message: "Deleted Review Successfully" });
};
