import { Lifecycle } from '@hapi/hapi'
import { when } from 'acd-utils'
import { qs } from 'constants/querystrings'

export const rootHandler: Lifecycle.Method = (request, reply) => {
  const queryStrings = when(request.query[qs.name])
    .map(qs => (Array.isArray(qs) ? [...qs] : [qs]))
    .getOrElse([])

  return reply.view('index', {
    title: 'Index',
    queryStrings,
    items: [
      { id: 1, label: 'this' },
      { id: 2, label: 'is' },
      { id: 3, label: 'cool' },
    ],
  })
}
