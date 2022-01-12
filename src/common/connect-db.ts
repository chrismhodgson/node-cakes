import mongoose, { ConnectOptions } from "mongoose";
import { config } from './config';

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(config.database.uri, { useNewUrlParser: true } as ConnectOptions)
  } catch (e) {
    console.error('ERROR - Cannot connect to mongo')
    throw e;
  }
}