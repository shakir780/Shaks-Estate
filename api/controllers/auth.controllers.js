import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  if ((!username, !email, !password)) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields!" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    const existingUser = await User.findOne({ email });
    const existingUserName = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exist" });
    }
    if (existingUserName) {
      return res.status(400).json({ error: "Username already exist" });
    }

    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) rer;
  } catch (error) {}
};
