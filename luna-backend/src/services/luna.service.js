function createTaskService(req, res) {
  res.json({
    success: true,
    message: "service create success",
  });
}

module.exports = { createTaskService };
