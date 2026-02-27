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
    }
}, {timestamps: true});

export default mongoose.model("Store", storeSchema);
