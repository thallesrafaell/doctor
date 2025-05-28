import dotenv from "dotenv";
dotenv.config();
const dbUrl = process.env.DATA_BASE_URL;
console.log("Database URL:", dbUrl);
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(dbUrl);

