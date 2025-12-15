import Header from '@/shared/components/molecules/header/header'

export default function GridAutoFullAutoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <Header />
      {children}
      <p>Nav</p>
    </div>
  )
}
