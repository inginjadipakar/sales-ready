import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "";

// Neon HTTP client for serverless edge & node runtime
export const sql = connectionString ? neon(connectionString) : null;
export const db = sql ? drizzle(sql, { schema }) : null;

export function isDatabaseConfigured(): boolean {
  return Boolean(
    connectionString &&
    !connectionString.includes("placeholder") &&
    connectionString.startsWith("postgres")
  );
}
