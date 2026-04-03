import { db } from "./src/db";
import { users } from "./src/db/schema";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";

async function seedAdmin() {
  const email = "obinata@market-in.jp";
  
  // Check if admin already exists
  const existing = await db.select().from(users).where(eq(users.email, email));
  if (existing.length > 0) {
    console.log("Admin already exists!");
    return;
  }

  const passwordHash = await bcrypt.hash("obi0350", 10);
  
  await db.insert(users).values({
    id: randomUUID(),
    email,
    passwordHash,
    role: "ADMIN",
    name: "大日方 宏行",
    corporateName: "株式会社YKCソリューションズ",
  });
  
  console.log("Admin user created successfully!");
}

seedAdmin();
