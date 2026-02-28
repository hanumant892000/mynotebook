const cloudinary = require('../utils/cloudinary.config');
const fs = require('fs');


const uploadFileOnCloud = async (localPath) => {
    try {
        if (!localPath) return null;
        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto", // Automatically determine the resource type
            folder: "mynotebook", // Specify the folder in Cloudinary
        });
        // Remove the local file after upload
        console.log(result)
        await fs.unlinkSync(localPath);

        console.log("File uploaded successfully:", result.secure_url);
        return result.secure_url; // Use secure_url for HTTPS
    } catch (error) {
        await fs.unlinkSync(localPath);
        console.error("Error in uploadOnCloudinary:", error);
        return null;
    }
}

module.exports = uploadFileOnCloud;