import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
    try {
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
            hashedPassword
        });
    
        const token = jwt.sign({
            id: user._id,
        }, process.env.ACCESS_TOKEN_SECRET);

        res.cookie("token", token);
    
        user.password = undefined;
    
        return res.status(201).json({user, message: "New User created!!"});
    } catch (error) {
        console.error("ERROR: " + error);
        return res.status(500).json({message: "Internal Server error"});
    }
}

export const loginUser = async (req, res) => {
    try{
        const {userid, password} = req.body;
        const user = await User.findOne({$or: [{email: userid}, {username: userid}]});
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
        res.status(200).json({message: "User logged in successfully"})

    } catch (err) {
        console.error("ERROR: " + err);
        return res.status(500).json({message: "Internal Server Error"});
    }
}