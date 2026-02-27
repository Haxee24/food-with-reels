import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';
import User from '../models/user.model.js';

export default async function authenticateToken(req, res, next){
    const token = req.cookies.token;
    if (!token) {
        throw new ApiError(401, "Unauthorized access");
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded?._id);
    if (!user){
        throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
}