import mongoose from 'mongoose';

export default function connectDB() {
    mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
    .then(() => {
        console.log("MongoDB connected!!")
    })
    .catch((err) => {
        console.error("ERROR: "+ err);
        console.log("MongoDB failed to connect!!");
        process.exit(1);
    })
}