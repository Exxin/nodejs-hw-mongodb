// import cloudinary from 'cloudinary';
import { CLOUDINARY } from '../constants/index.js';
import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';

const CLOUD_NAME = 'dg7oyfk1d';
const API_KEY = '521692969348882';
const API_SECRET = 'nbIIMsLpfYflgNjkyq20ziTKVVs';

cloudinary.config({
  secure: true,
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
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
