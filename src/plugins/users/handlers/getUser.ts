import * as Boom from '@hapi/boom'
import { Lifecycle, ServerRoute } from '@hapi/hapi'
import * as W from '@hapi/wreck'
import to from 'await-to-js'
import { paramSchema, User, userSchema } from 'schemas/users'
import { params } from 'constants/params'

const getUserHandler: Lifecycle.Method = async (request, reply) => {
  const [err, data] = await to(
    W.get(`https://jsonplaceholder.typicode.com/users/${request.params[params.id]}`)
  )

  if (err) {
    request.log('error', err)

    return Boom.badRequest('an error occured')
  }

  const users: User[] = JSON.parse((data?.payload as Buffer).toString())

  return reply.response(users).code(200)
}

export const getUser: Omit<ServerRoute, 'path' | 'method'> = {
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
