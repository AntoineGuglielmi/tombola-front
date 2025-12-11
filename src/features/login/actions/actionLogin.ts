'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LoginValues } from '../lib/z-login'

export const actionLogin = async (loginValues: LoginValues) => {
  try {
    const { email: identifier, password } = loginValues

    const { STRAPI_API_URL } = process.env

    const url = `${STRAPI_API_URL}/auth/local`

    const body = JSON.stringify({ identifier, password })

    const responseFromBack = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    const data = await responseFromBack.json()

    if (!responseFromBack.ok) {
      throw data.error
    }

    ;(await cookies()).set('auth', data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    })
    ;(await cookies()).set('user', data.user.documentId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    })

    return { redirectTo: `/tombola` }
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      typeof (error as { status?: number }).status === 'number'
    ) {
      switch ((error as { status: number }).status) {
        case 400:
          return { error: `L'identifiant ou le mot de passe est incorrect` }
      }
    }
  }
}

export const actionLogout = async () => {
  ;(await cookies()).delete('auth')
  ;(await cookies()).delete('user')
  redirect('/login')
}
