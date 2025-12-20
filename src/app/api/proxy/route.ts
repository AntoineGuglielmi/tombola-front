import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const authCookie = req.cookies.get('auth')

  if (!authCookie) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }

  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${authCookie.value}`,
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    const user = await res.json()

    return NextResponse.json({
      authenticated: true,
      user,
    })
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 500 })
  }
}
