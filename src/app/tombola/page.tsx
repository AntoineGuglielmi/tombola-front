import LogoutButton from '@/features/logout/component/logout-button'

type TombolaPageProps = {
  params: Promise<void>
}

export default function TombolaPage({}: TombolaPageProps) {
  return (
    <main className="">
      <p>Tombola</p>
      <LogoutButton />
    </main>
  )
}
