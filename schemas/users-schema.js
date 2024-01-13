const Joi = require("joi");

module.exports.reviewSchema = Joi.object({
  username: Joi.string().min(6).max(40).required().messages({
    "string.base": "Username harus berupa string",
    "string.empty": "Username tidak boleh kosong",
    "string.min": "Username harus memiliki setidaknya {6} karakter",
    "string.max": "Username tidak boleh lebih dari {40} karakter",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email harus berupa string",
    "string.empty": "Email tidak boleh kosong",
    "string.email": "Format email tidak valid",
  }),
  password: Joi.string()
    .required()
    .min(6)
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .messages({
      "string.base": "Password harus berupa string",
      "string.empty": "Password tidak boleh kosong",
      "string.min": "Password harus memiliki setidaknya {6} karakter",
      "string.pattern.base": "Password harus terdiri dari huruf dan angka",
    }),
});
