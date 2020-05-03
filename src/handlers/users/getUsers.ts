import { Lifecycle, ServerRoute } from '@hapi/hapi'
import { User, usersSchema } from 'schemas/users'
import * as W from '@hapi/wreck'
import to from 'await-to-js'

export const getUsersHandler: Lifecycle.Method = async (request, reply) => {
  const [err, data] = await to(W.get('https://jsonplaceholder.typicode.com/users'))

  if (err) {
    request.log('error', err)
    return reply.response({
      err: 'an error occured',
    })
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
