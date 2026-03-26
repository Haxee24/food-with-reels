import {FoodItem, Store} from "../models/index.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getFoodItems = asyncHandler(async function(req, res){
    const {id: storeId} = req.params;
    if (!storeId){
        throw new ApiError(500, "Invalid Store ID in params");
    }
    const foods = await FoodItem.find({store: storeId});

    return res.status(200)
    .json(new ApiResponse(200, foods, "Store items retrieved"))
});


export const getNewStores = asyncHandler(async (req, res) => {
    const stores = await Store.find().sort({ updatedAt: 1 }).limit(10);
    return res.status(200).json(new ApiResponse(200, stores, "Stores retrieval successful"));
})