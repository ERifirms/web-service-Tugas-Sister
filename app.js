const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const app = express();

dotEnv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB)
  .then((result) => {
    console.log("Database connected ..");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello word");
});

app.use("/api", require("./routes/product.routes"));
app.use("/api", require("./routes/review.routes"));
app.use("/api", require("./routes/user.routes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
