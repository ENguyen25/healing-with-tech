import User from "../models/userModel.js";
import { hashPassword, comparePasswords } from "../helpers/auth.js";

export const registerUser = async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password)

    const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({username})

        if (!user) {
            return res.json({error: 'No user found'})
        } 

        // Check if passwords match
        const match = await comparePasswords(password, user.password)
        if (match) {
            res.json('Passwords match')
        }
    } catch (error) {
        console.log(error)
    }
}
