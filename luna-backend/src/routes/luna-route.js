const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");

const { authMiddleware } = require("../middlewares/auth.middlewares");
const { isAdmin } = require("../middlewares/isAdmin");

const {
  createProduct,
  createProductsBulk,
  getAllProducts,
} = require("../services/luna.service");

router.post(
  "/products",
  authMiddleware,
  isAdmin,
  upload.single("img"),
  createProduct,
);

router.post(
  "/products/bulk",
  authMiddleware,
  isAdmin,
  upload.array("images", 20),
  createProductsBulk,
);

router.get("/products", getAllProducts);

module.exports = router;

module.exports = router;
