import {FoodItem, Store} from "../models/index.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from '../utils/ApiResponse.js'

export async function addFoodItem(req, res){
    if (!req?.user){
        throw new ApiError(401, "User not logged in");
    }
    const user = req.user;
    if (!user?.store){
        throw new ApiError(401, "Unauthorized access");
    }
    const {name, price, details} = req.body;
    if (!name){
        throw new ApiError(400, "Enter food name");
    }
    const store = await Store.findById(user.store);
    if (!store){
        throw new ApiError(404, "Store not found");
    }
    const item = await FoodItem.create({name, price, details, store: store._id});
    store.items.push(item._id);
    await store.save();
    return res.status(201).json(new ApiResponse(201, item, "Food Item added Successfully"));
}