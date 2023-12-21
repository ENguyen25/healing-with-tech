import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { hashPassword, comparePasswords } from "../helpers/auth.js";

export const registerUser = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);

  const newUser = new User({
    username: req.body.username,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ error: "No user found" });
    }

    // Check if passwords match
    const match = await comparePasswords(password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        { username: user.username, id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
      );
      const refreshToken = jwt.sign(
        { username: user.username, id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );
      
      return res.json({
        token: jwt.sign(
            { username: user.username, id: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" },
        )
      });
    } else {
      res.json("Passwords do not match");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

export const getUser = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

export const profile = function (req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};
