import "dotenv/config";
const dbUrl = process.env.DATA_BASE_URL;
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema"; // Adjust the import path as necessary

export const db = drizzle(dbUrl, {
  schema,
});
