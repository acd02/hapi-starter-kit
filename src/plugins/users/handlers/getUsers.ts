import * as Boom from '@hapi/boom'
import { Lifecycle, ServerRoute } from '@hapi/hapi'
import * as W from '@hapi/wreck'
import to from 'await-to-js'
import { User, usersSchema } from 'schemas/users'

const getUsersHandler: Lifecycle.Method = async (request, reply) => {
  const [err, data] = await to(W.get('https://jsonplaceholder.typicode.com/users'))

  if (err) {
    request.log('error', err)

    return Boom.badRequest('an error occured')
  }

  const users: User[] = JSON.parse((data?.payload as Buffer).toString())

  return reply.response(users).code(200)
}

export const getUsers: Omit<ServerRoute, 'path'> = {
  method: 'GET',
  handler: getUsersHandler,
  options: {
    response: {
      schema: usersSchema,
    },
  },
}
