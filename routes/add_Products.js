const express = require("express");
const router = express.Router();
const { upload, uploadToFirebase } = require("../config/firebaseConfig");
const Product = require("../models/products");

router.post("/",upload.single("image"),uploadToFirebase, async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      brand,
      color,
      category,
      Ratings,
      oldPrice,
    } = req.body;

    const dbPayload = {
      title,
      image: req.file.firebaseUrl,
      price,
      description,
      Ratings,
      oldPrice,
      color,
      brand,
      category,
    };
    console.log(dbPayload);
    console.log(uploadToFirebase);

    const saveProduct = new Product(dbPayload);
    const payload = await saveProduct.save();

    res.status(200).json({ message: "upload successfully", payload });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
