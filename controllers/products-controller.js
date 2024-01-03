const Product = require("../models/product-model");

module.exports.index = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json({ products });
};

module.exports.show = async (req, res) => {
  const { product_id } = req.params;
  const product = await Product.findById(product_id).populate("reviews");
  if (!product) {
    res.status(404).json({
      message: "Product Not Found",
    });
  }
  return res.status(200).json({ product });
};

module.exports.store = async (req, res) => {
  const { title, image, price, location, description } = req.body;
  const product = new Product({
    title: title,
    image: image,
    price: price,
    location: location,
    description: description,
  });

  await product.save();

  return res.status(201).json(product);
};

module.exports.update = async (req, res) => {
  const { title, image, price, location, description } = req.body;
  const { product_id } = req.params;

  if (!product_id) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  await Product.findByIdAndUpdate(product_id, {
    title: title,
    image: image,
    price: price,
    location: location,
    description: description,
  });

  return res.status(200).json({ message: "Update successfully" });
};

module.exports.destroy = async (req, res) => {
  const { product_id } = req.params;
  await Product.findByIdAndDelete(product_id);
  return res.status(200).json({ message: "Deleted Succesfully" });
};
