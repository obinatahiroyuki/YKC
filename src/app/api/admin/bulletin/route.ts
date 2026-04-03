import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { bulletinPosts, users } from "@/db/schema";
import { auth } from "@/auth";
import { eq, desc } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get posts with user info using standard Drizzle API
    // Actually Drizzle relational queries are simpler, but standard joins work too.
    // Assuming simple query for now or two queries to prevent complex joins if unconfigured relations
    const allPosts = await db.select().from(bulletinPosts).orderBy(desc(bulletinPosts.createdAt));
    const allUsers = await db.select().from(users);
    
    const userMap = new Map(allUsers.map(u => [u.id, u]));

    const enrichedPosts = allPosts.map(p => ({
      ...p,
      user: userMap.get(p.userId) || null
    }));
    
    return NextResponse.json(enrichedPosts);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { postId } = await req.json();

    if (!postId) {
      return NextResponse.json({ error: "Missing postId" }, { status: 400 });
    }

    // Update status to DELETED
    await db.update(bulletinPosts)
      .set({ status: 'DELETED' })
      .where(eq(bulletinPosts.id, postId));

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Failed to delete post:", err);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
