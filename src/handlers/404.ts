import { Lifecycle } from '@hapi/hapi'

export const notFoundHandler: Lifecycle.Method = (_request, reply) => {
  return reply
    .response({
      message: 'sorry',
    })
    .code(404)
}
