import * as Boom from '@hapi/boom'
import { Lifecycle } from '@hapi/hapi'

export const notFoundHandler: Lifecycle.Method = (_request, _reply) => {
  return Boom.notFound('sorry')
}
