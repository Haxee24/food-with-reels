import {FoodItem, FoodReel, Store} from "../models/index.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from '../utils/ApiResponse.js';
import uploadOnCloudinary from "../utils/cloudinary.js";
import asyncHandler from "../utils/asyncHandler.js";

export const addFoodItem = asyncHandler(async function (req, res){
    if (!req?.user){
        throw new ApiError(401, "User not logged in");
    }
    const user = req.user;
    if (user?.role !== "partner"){
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
    const fimglocal = req.file?.path;
    //dev
    if (!fimglocal){
        return new ApiError(400, "no local file");
    }
    const {secure_url: image} = await uploadOnCloudinary(fimglocal);
    // let image = "defaultfood.png"
    // if (fimglocal){
    //     image = await uploadOnCloudinary(fimglocal);
    // }
    const item = await FoodItem.create({name, price, details, image, store: store._id});
    store.items.push(item._id);
    await store.save();
    return res.status(201).json(new ApiResponse(201, item, "Food Item added Successfully"));
});

export const addFoodReel = asyncHandler(async function(req, res) {
    const user = req?.user;
    if (user.role !== "partner"){
        return new ApiError(401, "Unauthorized Access");
    }
    let {caption} = req.body;
    if (!caption){
        caption = "";
    }
    const localreel = req.file?.path;
    if (!localreel){
        return new ApiError(400, "Reel not uploaded");
    }
    const {secure_url: reel} = await uploadOnCloudinary(localreel);
    const newReel = await FoodReel.create({
        caption,
        video:reel,
        store: user.store
    });
    return res.status(201).json(new ApiResponse(201, newReel, "Reel created successfully"))
});