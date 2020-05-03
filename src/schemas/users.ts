import * as Joi from '@hapi/joi'

export const userSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.object({
    street: Joi.string().required(),
    suite: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
    geo: Joi.object({
      lat: Joi.string().required(),
      lng: Joi.string().required(),
    }),
  }),
  phone: Joi.string().required(),
  website: Joi.string().required(),
  company: Joi.object({
    name: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required(),
  }),
})

export const usersSchema = Joi.array().items(userSchema)

export const paramSchema = Joi.object({
  id: Joi.number().min(1).max(10),
})

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

type Geo = {
  lat: string
  lng: string
}

type Company = {
  name: string
  catchPhrase: string
  bs: string
}
