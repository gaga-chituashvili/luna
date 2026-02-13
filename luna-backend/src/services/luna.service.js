const { CoffeeSchema } = require("../models/coffee-schema");
const { z } = require("zod");

const productCreationSchema = z.object({
  name: z.string().min(1),
  price: z.number().int().positive(),
  tag: z.string().min(1),
});

async function createProduct(req, res) {
  const body = req.body;

  const validateBody = productCreationSchema.safeParse(body);

  if (!validateBody.success) {
    return res.status(400).json({
      success: false,
      message: validateBody.error.format(),
    });
  }

  const newProduct = await CoffeeSchema.create(validateBody.data);

  return res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct,
  });
}

async function getAllProducts(req, res) {
  const products = await CoffeeSchema.findAll();

  return res.json({
    success: true,
    data: products,
  });
}

module.exports = {
  createProduct,
  getAllProducts,
};
