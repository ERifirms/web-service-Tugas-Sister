const User = require("../models/user-model");

module.exports.index = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ users });
};

module.exports.show = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findOneBy(user_id);
  return res.status(200).json({ user });
};

module.exports.store = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username: username,
    email: email,
    password: password,
  });

  await newUser.save();

  return res.status(201).json({ newUser });
};
