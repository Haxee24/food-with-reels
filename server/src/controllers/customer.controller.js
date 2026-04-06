import asyncHandler from "../utils/asyncHandler";
import { FoodReel } from "../models";
const getNewReels = asyncHandler(async (req, res) => {
    const reels = await FoodReel.find().sort({ updatedAt: 1 }).limit(10);
    return res.status(200).json(new ApiResponse(200, reels, "Reels retrieval successful"));
} )