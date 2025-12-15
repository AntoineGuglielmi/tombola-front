import LoginForm from '@/features/login/components/login-form'
import Main from '@/shared/components/atoms/main'

export default function LoginPage() {
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
