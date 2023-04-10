import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dlxwkq6bm',
    api_key: '312155376375165',
    api_secret: 'OuD06O8Izb2EVH8rnWYr9Xjfeak'
});

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    });
}

export const deleteImage = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId);
}