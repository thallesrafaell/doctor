import { db } from "@/db";
import "dotenv/config";

const dbUrl = process.env.DATA_BASE_URL;
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATA_BASE_URL!,
  },
});
