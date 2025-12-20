import LoginForm from '@/features/login/components/login-form'
import Main from '@/shared/components/atoms/main'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const auth = (await cookies()).get('auth')

  if (auth) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/proxy`, {
      headers: {
        cookie: `auth=${auth.value}`,
      },
      cache: 'no-store',
    })

    if (res.ok) {
      redirect('/tombola')
    }
  }
  return (
    <>
      <Main
        className="relative"
        container
        height="screen"
        layout="center"
      >
        <LoginForm />
      </Main>
    </>
  )
}
