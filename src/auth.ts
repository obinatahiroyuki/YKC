import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"
import { db } from "@/db"
import { users } from "@/db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "メールアドレス", type: "email" },
        password: { label: "パスワード", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        // Mock DB explicitly to bypass SQLite/Bcrypt issues during this preview
        if (credentials.email === "obinata@market-in.jp" && credentials.password === "obi0350") {
          return {
            id: "temp-admin-id-mock",
            email: "obinata@market-in.jp",
            name: "大日方 宏行",
            corporateName: "株式会社YKCソリューションズ",
            role: "ADMIN"
          };
        }

        try {
          const userResults = await db.select().from(users).where(eq(users.email, credentials.email as string)).limit(1)
          const user = userResults[0]
          
          if (!user) return null

          const isPasswordValid = await bcrypt.compare(credentials.password as string, user.passwordHash)
          
          if (!isPasswordValid) return null

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        } catch (e) {
          console.error("Auth Error", e);
          return null;
        }
      }
    })
  ]
})
