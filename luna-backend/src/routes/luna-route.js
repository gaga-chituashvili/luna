const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../services/luna.service");


router.post("/product/create", createProduct);


router.get("/products", getAllProducts);

module.exports = router;
