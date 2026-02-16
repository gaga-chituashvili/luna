const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const {
  createProduct,
  createProductsBulk,
  getAllProducts,
} = require("../services/luna.service");


router.post("/products", upload.single("img"), createProduct);

router.post("/products/bulk", upload.array("images", 20), createProductsBulk);


router.get("/products", getAllProducts);

module.exports = router;
