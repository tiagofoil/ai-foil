import NextAuth from "next-auth"
import { auth } from "@/auth"

// Standard config for now, let layout handle redirect if session missing for fine control
// But middleware is better for performance.
export default auth((req) => {
    const isLoggedIn = !!req.auth
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
    const isAdminPage = req.nextUrl.pathname.startsWith('/admin')

    if (isAdminPage && !isLoggedIn) {
        return Response.redirect(new URL('/auth/login', req.nextUrl))
    }
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
