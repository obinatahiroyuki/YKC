import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export async function GET(req: NextRequest) {
  // Check auth
  const session = await auth();
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const allUsers = await db.select().from(users);
    // Sanitize passwords out before sending to client
    const safeUsers = allUsers.map(u => ({
      id: u.id,
      email: u.email,
      name: u.name,
      corporateName: u.corporateName,
      role: u.role,
      createdAt: u.createdAt
    }));
    
    return NextResponse.json(safeUsers);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  // Check auth
  const session = await auth();
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { email, password, name, corporateName, role } = body;

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    const newId = randomUUID();

    // Insert to DB
    await db.insert(users).values({
      id: newId,
      email,
      passwordHash,
      name,
      corporateName,
      role: role || 'USER',
    });

    return NextResponse.json({ success: true, id: newId }, { status: 201 });
  } catch (err: any) {
    console.error("Failed to create user:", err);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
