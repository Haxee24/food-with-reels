import mongoose, {Schema} from 'mongoose';

const foodItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    about: {
        type: String
    },
    image: {
        type: String,
        default: "defaultimg.png"
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("FoodItem", foodItemSchema);