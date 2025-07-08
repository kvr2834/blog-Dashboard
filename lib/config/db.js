import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;


export const connectDB = async ()=>{
    if (!uri) {
    throw new Error("MONGODB_URI not defined in .env.local");
  }

  await mongoose.connect(uri);

  console.log("Database Connected");
};
