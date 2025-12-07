import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, '6 caractères minimum'),
})

export type LoginValues = z.infer<typeof loginSchema>
