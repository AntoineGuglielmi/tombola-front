import LogoutButton from '@/features/logout/component/logout-button'

type UserPageProps = {
  params: Promise<void>
}

export default function UserPage({}: UserPageProps) {
  return (
    <>
      <LogoutButton />
    </>
  )
}
