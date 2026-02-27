import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import asyncHandler from "../utils/asyncHandler.js";


export const registerUser = asyncHandler(async (req, res) => {
    const {fullname, username, email, password} = req.body;
    const existingUser = await User.findOne({$or: [{email}, {username}]});
    if (existingUser){
        return res.status(400).json({
            message: "User already exists"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.ACCESS_TOKEN_SECRET);

    res.cookie("token", token);

    user.password = undefined;

    return res.status(201).json({user, message: "New User created!!"});
})

export const loginUser = asyncHandler(async (req, res) => {
    const {userid, password} = req.body;
    const user = await User.findOne({$or: [{email: userid}, {username: userid}]}).select("+password");
    if (!user) return res.status(400).json({message: "User does not exits"});
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid){
        return res.status(400).json({
            message: "Invalid password"
        })
    }
    const token = jwt.sign({
        _id: user._id
    }, process.env.ACCESS_TOKEN_SECRET);

    res.cookie("token", token);
    return res.status(200).json({message: "User logged in successfully"})
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({message: "User logged out successfully"});  
});