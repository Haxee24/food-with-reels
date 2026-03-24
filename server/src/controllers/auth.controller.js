import {User, Store} from "../models/index.js";
import bcrypt from 'bcryptjs';
import uploadOnCloudinary from "../utils/cloudinary.js";
import jwt from 'jsonwebtoken';
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production"
}


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
        password: hashedPassword,
        cart: [],
        role: "customer"
    });

    const token = jwt.sign({
        id: user._id,
    }, process.env.ACCESS_TOKEN_SECRET);

    res.cookie("token", token, options);

    user.password = undefined;

    return res.status(201).json({user, message: "New User created!!"});
})

export const loginUser = asyncHandler(async (req, res) => {
    const {userid, password} = req.body;
    if (!userid || !password) {
        throw new ApiError(400, "All fields are required");
    }
    const user = await User.findOne({$or: [{email: userid}, {username: userid}]}).select("+password");
    if (!user) return res.status(400).json({message: "User does not exist"});
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid){
        throw new ApiError(400, "Invalid Password");
    }
    const token = jwt.sign({
        _id: user._id
    }, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});

    res.cookie("token", token, options);
    return res.status(200).json(
        new ApiResponse(200, {_id: user._id, token}, "User logged in successfully")
    )
});

export const getUser = asyncHandler(async (req, res)=>{
    return new ApiResponse(200, {user: req.user}, "User retrieved successfully!");
})

export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({message: "User logged out successfully"});  
});

export const registerPartner = asyncHandler(async (req, res) => {
    const {fullname, username, email, password, store: instore} = req.body;
    const localHeroPath = req.file?.path;
    const {secure_url: heroImage} = await uploadOnCloudinary(localHeroPath);
    const existingUser = await User.findOne({$or: [{email}, {username}]});
    if (existingUser){
        throw new ApiError(400, "User already exists");
    }
    const details = [fullname, username, email, password];
    if (details.some(val => !val)){
        throw new ApiError(400, "Enter all details");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        fullname,
        username,
        email,
        password: hashedPassword,
        role: "partner"
    });

    const store = await Store.create({
        user: user._id,
        storename: instore?.storename,
        address: instore?.address,
        phone: instore?.phone, 
        heroImage
    });
    user.store = store._id;
    await user.save();

    const token = jwt.sign({
        id: user._id,
    }, process.env.ACCESS_TOKEN_SECRET);

    res.cookie("token", token, options);

    user.password = undefined;

    return res.status(201).json({user, message: "New User created!!"});
})