import mongoose, {mongo, Schema} from "mongoose";

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
    isFoodPartner: {
        type: Boolean,
        default: false
    },
    // Store: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Store",
    //     default: null
    // }
}, {timestamps: true});

export default mongoose.model("User", userSchema);