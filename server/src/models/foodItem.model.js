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
    }
}, {timestamps: true});

export default mongoose.model("FoodItem", foodItemSchema);