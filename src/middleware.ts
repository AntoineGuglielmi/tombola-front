import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const isLoginPage = req.nextUrl.pathname.startsWith('/login')
  const authCookie = req.cookies.get('auth')
  const reqPathname = req.nextUrl.pathname

  if (!authCookie && !isLoginPage && reqPathname !== '/style') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (authCookie && isLoginPage) {
    const res = await (
      await fetch(`${process.env.STRAPI_API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${authCookie.value}` },
      })
    ).json()
    if (!res.error) {
      return NextResponse.redirect(new URL('/tombola', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
