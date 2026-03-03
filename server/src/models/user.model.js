import mongoose, {Schema} from "mongoose";

const userSchema = Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        select: false
    },
    role: {
        type: String,
        enum: ["customer", "partner"],
        required: true,
        default: "customer"
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store",
        default: null
    },
    cart: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "FoodItem",
        default: null
    }
}, {timestamps: true});

export default mongoose.model("User", userSchema);