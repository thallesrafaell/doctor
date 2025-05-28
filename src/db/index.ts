import "dotenv/config";
const dbUrl = process.env.DATA_BASE_URL;
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(dbUrl);
