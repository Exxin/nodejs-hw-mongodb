import mongoose from 'mongoose';

const MONGODB_USER = 'exxinblood';
const MONGODB_PASSWORD = 'o4BsI9P9AjbFMDt9';
const MONGODB_URL = 'cluster0.8cyzrat.mongodb.net';
const MONGODB_DB = 'contacts';

// const MONGODB_USER = process.env.MONGODB_USER;
// const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
// const MONGODB_URL = process.env.MONGODB_URL;
// const MONGODB_DB = process.env.MONGODB_DB;


export const initMongoConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

