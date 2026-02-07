const { UserSchema } = require("../models/user-schema");
const bcrypt = require("bcryptjs");
const { signToken } = require("../utils/jwt");
const { z } = require("zod");

async function registerUser(req, res) {
  try {
    const userRegistrationSchema = z.object({
      email: z.string().email(),
      password: z.string().min(8).max(64),
      fullName: z.string().min(4).max(96),
      username: z.string().min(3).max(32),
      birthDate: z.string().nullable(true),
    });

    const newUserBody = req.body;
    const validateBody = userRegistrationSchema.safeParse(newUserBody);

    if (!validateBody.success) {
      return res
        .status(400)
        .json({ success: false, message: JSON.parse(validateBody.error) });
    }

    const existingUser = await UserSchema.findOne({
      where: { email: newUserBody.email },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(newUserBody.password, 10);

    const newUser = await UserSchema.create({
      email: newUserBody.email,
      password: hashedPassword,
      fullName: newUserBody.fullName,
      username: newUserBody.username,
      birthDate: newUserBody.birthDate,
    });

    if (!newUser) {
      return res
        .status(500)
        .json({ success: false, message: "User could not be created" });
    }

    return res.status(201).json({
      success: true,
      message: "New User has been registered successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message, success: false });
  }
}

async function signInUser(req, res) {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    console.log(password, user.password);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const token = signToken({
      id: user.id,
      email: user.email,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message, success: false });
  }
}

async function userProfile(req, res) {
  if (!req.user) {
    return res.status(400).json({
      success: false,
      message: "Error: user not found",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User profile data",
    data: req.user,
  });
}

module.exports = { registerUser, signInUser, userProfile };
