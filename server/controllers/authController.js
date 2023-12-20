import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
      });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
