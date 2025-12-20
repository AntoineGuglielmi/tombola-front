import Main from '@/shared/components/atoms/main'
import Header from '@/shared/components/molecules/header/header'
import Nav from '@/shared/components/molecules/nav/nav'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function GridAutoFullAutoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const auth = (await cookies()).get('auth')

  if (!auth) {
    redirect('/login')
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/proxy`, {
    headers: {
      cookie: `auth=${auth.value}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    redirect('/login')
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <Header />
      <Main
        layout="default"
        container
        className="mb-8"
      >
        {children}
      </Main>
      <Nav />
    </div>
  )
}
