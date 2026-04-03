import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  providers: [],
  pages: { signIn: '/login' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.sub;
      }
      return session
    }
  },
  secret: "yYcYljdkAwBSOUTowcL2j/1qH7VoXKSpy1IZJVD4cVI=",
  trustHost: true
} satisfies NextAuthConfig;
