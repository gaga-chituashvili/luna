const express = require("express");
const router = express.Router();

const {
  createRate,
  createRatesBulk,
  getAllRates,
} = require("../services/rate.service");

router.post("/rates", createRate);

router.post("/rates/bulk", createRatesBulk);

router.get("/rates", getAllRates);

module.exports = router;
