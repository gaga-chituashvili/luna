const express = require("express");
const {
  registerUser,
  signInUser,
  userProfile,
} = require("../services/auth.services");
const { authMiddleware } = require("../middlewares/auth.middlewares");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", signInUser);
authRouter.get("/profile", authMiddleware, userProfile);

module.exports = authRouter;
