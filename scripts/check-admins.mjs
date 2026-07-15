import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
});

async function main() {
  const result = await db.execute("SELECT * FROM Admin");
  console.log("Admins in DB:", result.rows);
}

main().catch(console.error);
