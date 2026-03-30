const express = require("express");
const router = express.Router();
const upload = require("@/middlewares/upload");

const { authMiddleware } = require("@/middlewares/auth.middlewares");
const { isAdmin } = require("@/middlewares/isAdmin");

const {
  createProduct,
  createProductsBulk,
  getAllProducts,
} = require("@/services/luna.service");

const { Coffee } = require("@/models/coffee-schema");

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

router.patch(
  "/products/:id",
  authMiddleware,
  isAdmin,
  upload.single("img"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, tag } = req.body;

      const product = await Coffee.findByPk(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      if (name !== undefined) product.name = name;
      if (price !== undefined) product.price = price;
      if (tag !== undefined) product.tag = tag;

      if (req.file) {
        product.img = req.file.path;
      }

      await product.save();

      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
);

router.patch(
  "/products/image/reset",
  authMiddleware,
  isAdmin,
  upload.single("img"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No image uploaded" });
      }

      await Coffee.update(
        { img: req.file.path },
        { where: {} },
      );

      res.json({ message: "All product images updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
);
module.exports = router;
