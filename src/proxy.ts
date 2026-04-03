import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req: any) => {
  const isLoggedIn = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith('/login')

  if (isAuthPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/home', req.nextUrl))
    }
    return null
  }

  if (!isLoggedIn && req.nextUrl.pathname !== '/' && !req.nextUrl.pathname.startsWith('/admin')) {
    // Top page is public, everything else requires login
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }

    return Response.redirect(
      new URL(`/login?from=${encodeURIComponent(from)}`, req.nextUrl)
    );
  }

  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
  if (isAdminRoute && req.auth?.user?.role !== 'ADMIN') {
    return Response.redirect(new URL('/home', req.nextUrl))
  }
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|manifest\\.json|\\.png|\\.jpg|\\.svg).*)'],
}
