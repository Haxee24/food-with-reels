import mongoose, {mongo, Schema} from "mongoose";

const userSchema = Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
}, {timestamps: true});

export default mongoose.model("User", userSchema);