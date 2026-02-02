const express = require("express");
const { createTaskService } = require("../services/luna.service");

const router = express.Router();
router.get("/task/create", createTaskService);

module.exports = router;
