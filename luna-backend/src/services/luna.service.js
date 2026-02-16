const { CoffeeSchema } = require("../models/coffee-schema");
const { z } = require("zod");

const productCreationSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().int().positive(),
  img: z.string().url(),
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

  async function createProductsBulk(req, res) {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Images are required",
        });
      }

      const { names, prices, tags } = req.body;

      const products = req.files.map((file, index) => ({
        name: names[index],
        price: Number(prices[index]),
        tag: tags[index],
        img: `/uploads/${file.filename}`,
      }));

      const created = await CoffeeSchema.bulkCreate(products);

      return res.status(201).json({
        success: true,
        data: created,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
}
async function createProductsBulk(req, res) {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Images are required",
      });
    }

    const { names, prices, tags } = req.body;

    const products = req.files.map((file, index) => ({
      name: names[index],
      price: Number(prices[index]),
      tag: tags[index],
      img: `/uploads/${file.filename}`,
    }));

    const created = await CoffeeSchema.bulkCreate(products);

    return res.status(201).json({
      success: true,
      data: created,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  createProduct,
  createProductsBulk,
  getAllProducts,
};
