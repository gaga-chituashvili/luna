const express = require("express");
const router = express.Router();

const { authMiddleware } = require("../middlewares/auth.middlewares");
const { isAdmin } = require("../middlewares/isAdmin");

const {
  createRate,
  createRatesBulk,
  getAllRates,
} = require("../services/rate.service");

router.post("/rates", authMiddleware, isAdmin, createRate);

router.post("/rates/bulk", authMiddleware, isAdmin, createRatesBulk);

router.get("/rates", getAllRates);

module.exports = router;
