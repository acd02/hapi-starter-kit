import * as Boom from '@hapi/boom'
import { Lifecycle, ServerRoute } from '@hapi/hapi'
import { simpleUserSchema } from 'schemas/users'

const postUserHandler: Lifecycle.Method = async (request, reply) => {
  return reply.response(request.payload)
}

export const postUser: Omit<ServerRoute, 'path' | 'method'> = {
  handler: postUserHandler,
  options: {
    validate: {
      payload: simpleUserSchema,
      failAction: (_req, _reply, err) => Boom.badRequest((err as unknown) as string),
    },
    response: {
      schema: simpleUserSchema,
    },
  },
}
