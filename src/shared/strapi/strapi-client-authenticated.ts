import { strapi } from '@strapi/client'

export const strapiClientAuthenticated = (jwt: string) => {
  return strapi({
    baseURL: process.env.STRAPI_API_URL!,
    auth: jwt,
  })
}
