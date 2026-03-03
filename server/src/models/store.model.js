import mongoose, {Schema} from "mongoose";

const storeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: {
        type: [Schema.Types.ObjectId],
        ref: "FoodItem",
        default: []
    },
    storename: {
        type: String,
        required: true
    },
    reels: {
        type: [Schema.Types.ObjectId],
        ref: "FoodReel",
        default: [],
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

export default mongoose.model("Store", storeSchema);
