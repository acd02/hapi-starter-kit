import * as Boom from '@hapi/boom'
import { Lifecycle, ServerRoute } from '@hapi/hapi'
import { paramSchema } from 'schemas/users'

const checkCustomErrMessageValidationHandler: Lifecycle.Method = async (_request, reply) => {
  return reply.response('ok').code(200)
}

export const checkCustomErrMessageValidation: Omit<ServerRoute, 'path' | 'method'> = {
  handler: checkCustomErrMessageValidationHandler,
  options: {
    validate: {
      params: paramSchema,
      failAction: (_req, _reply, err) => {
        return Boom.badRequest((err as unknown) as string)
      },
    },
  },
}
