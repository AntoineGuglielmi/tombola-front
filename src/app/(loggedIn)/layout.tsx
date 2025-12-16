import Main from '@/shared/components/atoms/main'
import Header from '@/shared/components/molecules/header/header'
import Nav from '@/shared/components/molecules/nav/nav'

export default function GridAutoFullAutoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
