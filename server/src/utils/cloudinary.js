import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const uploadOnCloudinary = async (localpath) => {
    try{
        if (!localpath) return null;
        const response = cloudinary.uploader.upload(localpath,  {
            resource_type: "auto"
        });
        console.log("File Uploaded to cloudinary: ", response.url);
        return response;
    } catch (err) {
        fs.unlinkSync(localpath) //remove corrupt file
        return null;
    }
};

export default uploadOnCloudinary