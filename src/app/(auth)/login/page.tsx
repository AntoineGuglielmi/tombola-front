import LoginForm from '@/features/login/login-form'
import Main from '@/shared/components/atoms/main'

type LoginPageProps = {
  params: Promise<void>
}

export default function LoginPage({}: LoginPageProps) {
  return (
    <Main>
      <LoginForm />
    </Main>
  )
}
