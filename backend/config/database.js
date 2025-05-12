import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.db.uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error while connecting to db: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
