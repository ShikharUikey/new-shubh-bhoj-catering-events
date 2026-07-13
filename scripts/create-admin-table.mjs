import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
});

async function main() {
  console.log("Creating Admin table...");
  await db.execute(`
    CREATE TABLE IF NOT EXISTS "Admin" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "username" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Creating unique index...");
  await db.execute(`
    CREATE UNIQUE INDEX IF NOT EXISTS "Admin_username_key" ON "Admin"("username");
  `);
  console.log("Admin table created successfully.");
}

main().catch(console.error);
