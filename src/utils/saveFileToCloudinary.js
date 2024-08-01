// import cloudinary from 'cloudinary';
import { CLOUDINARY } from '../constants/index.js';
import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

// const CLOUDINARY.CLOUD_NAME = 'dg7oyfk1d';
// const CLOUDINARY.API_KEY = '521692969348882';
// const CLOUDINARY.API_SECRET = 'nbIIMsLpfYflgNjkyq20ziTKVVs';

cloudinary.config({
  secure: true,
  // cloud_name: CLOUDINARY.CLOUD_NAME,
  // api_key: CLOUDINARY.API_KEY,
  // api_secret: CLOUDINARY.API_SECRET,
  cloud_name: 'dg7oyfk1d',
  api_key: '521692969348882',
  api_secret: 'nbIIMsLpfYflgNjkyq20ziTKVVs',
});

export const saveFileToCloudinary = async (file) => {
  try {
    console.log('Uploading file to Cloudinary:', file);
    const response = await cloudinary.v2.uploader.upload(file.path);
    console.log('Upload response:', response);
    return response.secure_url;
  } catch (error) {
    console.error('Failed to upload file to Cloudinary:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

    //  const uploadResult = await cloudinary.uploader
    //    .upload(
    //        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //            public_id: 'shoes',
    //        }
    //    )
    //    .catch((error) => {
    //        console.log(error);
    //    });
    //    console.log(uploadResult);
