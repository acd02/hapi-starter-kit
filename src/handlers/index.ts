import { Lifecycle } from '@hapi/hapi'

export const rootHandler: Lifecycle.Method = (_request, reply) => {
  return reply.view('index', {
    title: 'Index',
    items: [
      { id: 1, label: 'this' },
      { id: 2, label: 'is' },
      { id: 3, label: 'cool' },
    ],
  })
}
