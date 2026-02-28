import mongoose, {Schema} from "mongoose";

const foodReelSchema = new Schema({
    video: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    foodItem: {
        type: Schema.Types.ObjectId,
        ref: "FoodItem",
        required: true
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true
    }
}, {timestamps: true});

export default mongoose.model("FoodReel", foodReelSchema);