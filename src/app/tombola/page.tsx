import LogoutButton from '@/features/logout/component/logout-button'
import Main from '@/shared/components/atoms/main'

type TombolaPageProps = {
  params: Promise<void>
}

export default function TombolaPage({}: TombolaPageProps) {
  return (
    <Main
      layout="default"
      container
    >
      <p>Tombola</p>
      <LogoutButton />
    </Main>
  )
}
