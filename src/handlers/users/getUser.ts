import { Lifecycle, ServerRoute } from '@hapi/hapi'
import * as W from '@hapi/wreck'
import to from 'await-to-js'
import { paramSchema, User, userSchema } from 'schemas/users'
import { Params } from 'utils/params'

export const getUserHandler: Lifecycle.Method = async (request, reply) => {
  const [err, data] = await to(
    W.get(`https://jsonplaceholder.typicode.com/users/${request.params[Params.id]}`)
  )

  if (err) {
    request.log('error', err)

    return reply.response({
      err: 'an error occured',
    })
  }

  const users: User[] = JSON.parse((data?.payload as Buffer).toString())

  return reply.response(users).code(200)
}

export const getUser: Omit<ServerRoute, 'path'> = {
  method: 'GET',
  handler: getUserHandler,
  options: {
    validate: {
      params: paramSchema,
    },
    response: {
      schema: userSchema,
    },
  },
}
