import mongoose from "mongoose";
import { DBName } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DBName}`
    );
    console.log(
      `\n db connection successfully.!! \n DB Host:${connectionInstance.connection.host} \n DB port ${connectionInstance.connection.port}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
