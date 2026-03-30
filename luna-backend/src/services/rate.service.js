const { Rate } = require("../models/rate-schema");
const { z } = require("zod");

/* ---------- VALIDATION SCHEMA ---------- */

const createRateSchema = z.object({
  fullname: z.string().min(1),
  position: z.string(),
  rate: z.coerce.number().min(1).max(5),
  comment: z.string().min(1),
});

/* ---------- CREATE SINGLE RATE ---------- */

async function createRate(req, res) {
  try {
    const body = req.body;

    const validateBody = createRateSchema.safeParse(body);

    if (!validateBody.success) {
      return res.status(400).json({
        success: false,
        message: validateBody.error.format(),
      });
    }

    const newRate = await Rate.create(validateBody.data);

    return res.status(201).json({
      success: true,
      message: "Rate created successfully",
      data: newRate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

/* ---------- GET ALL RATES ---------- */

async function getAllRates(req, res) {
  try {
    const rates = await Rate.findAll();

    return res.json({
      success: true,
      data: rates,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

/* ---------- BULK CREATE ---------- */

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

    const reviews = fullnames.map((fullname, index) => ({
      fullname: fullname,
      position: positions[index],
      rate: Number(rates[index]),
      comment: comments[index],
    }));

    const created = await Rate.bulkCreate(reviews);

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
