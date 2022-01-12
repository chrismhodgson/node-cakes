import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  server: {
    port: process.env.SERVER_PORT
  },
  database: {
    // type://username:password@host:port/database_name
    // 'mongodb://mongo:27017/node-cakes-mongo'
    uri: process.env.DATABASE_URI
  }
}