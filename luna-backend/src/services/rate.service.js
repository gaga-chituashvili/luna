const { CoffeeSchema } = require("../models/coffee-schema");
const { z } = require("zod");

const createRateSchema = z.object({
  fullname: z.string().min(1),
  position: z.coerce.number().int().positive(),
  rate: z.string().url(),
  comment: z.string().min(1),
});

async function createRate(req, res) {
  const body = req.body;

  const validateBody = createRateSchema.safeParse(body);

  if (!validateBody.success) {
    return res.status(400).json({
      success: false,
      message: validateBody.error.format(),
    });
  }

  const newRate = await CoffeeSchema.create(validateBody.data);

  return res.status(201).json({
    success: true,
    message: "Rate created successfully",
    data: newRate,
  });
}

async function getAllRates(req, res) {
  const rates = await CoffeeSchema.findAll();

  return res.json({
    success: true,
    data: rates,
  });
}

async function createRatesBulk(req, res) {
  try {
    const { fullnames, positions, rates, comments } = req.body;
    if (!fullnames || !positions || !rates || !comments) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (
      fullnames.length !== positions.length ||
      fullnames.length !== rates.length ||
      fullnames.length !== comments.length
    ) {
      return res.status(400).json({
        success: false,
        message: "All arrays must have the same length",
      });
    }

    const products = fullnames.map((fullname, index) => ({
      fullname: fullname,
      position: Number(positions[index]),
      rate: rates[index],
      comment: comments[index],
    }));

    const created = await CoffeeSchema.bulkCreate(products);

    return res.status(201).json({
      success: true,
      message: "Rates created successfully",
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
  createRate,
  createRatesBulk,
  getAllRates,
};
