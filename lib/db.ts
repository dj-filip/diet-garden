import mongoose from "mongoose";


const MONGO_URI: string = process.env.MONGO_URI || "";


export const connectDB = async (): Promise<typeof mongoose> => {
  try {
    if (mongoose.connection.readyState === 1) return mongoose;
    await mongoose.connect(MONGO_URI);
    return mongoose;
  } catch (error) {
    throw error;
  }
}