import {FoodItem, Store} from "../models";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";

export const getFoodItems = asyncHandler(async function(req, res){
    const storeId = req.params;
    if (!storeId){
        return new ApiError(500, "Invalid Store ID in params");
    }
    const foods = await FoodItem.find({store: storeId});

    return res.status(200)
    .json(new ApiResponse(200, foods, "Store items retrieved"))
});


export const getNewStores = asyncHandler(async (req, res) => {
    const stores = Store.find().sort({ updatedAt: -1 }).limit(10);
    return res.status(200).json(new ApiResponse(200, stores, "Stores retrieval successful"));
})