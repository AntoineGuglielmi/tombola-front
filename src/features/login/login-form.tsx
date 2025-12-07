import Form from 'next/form'

type LoginFormProps = object

export default function LoginForm({}: LoginFormProps) {
  return (
    <Form
      action=""
      className="flex flex-col gap-4 bg-white p-4 br-2"
    >
      <h1 className="font-varela fw-700 fz-8">Tombola</h1>
    </Form>
  )
}
