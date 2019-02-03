import { Lifecycle } from 'hapi'
import { head } from 'fp-ts/lib/Array'

import { getQueryStrings, getUrlParam } from '../utils'
import { QueryStrings, Params } from '../routes'

export const rootHandler: Lifecycle.Method = (request, reply) => {
  const queryStringValue = head(getQueryStrings(request, QueryStrings.name)).getOrElse('')

  const paramValue = getUrlParam(request, Params.id).getOrElse('')

  return reply.view('index', {
    items: [{ id: 1, label: 'this' }, { id: 2, label: 'is' }, { id: 3, label: 'cool' }],
    queryStringValue,
    paramValue
  })
}

export const notFoundHandler: Lifecycle.Method = (_request, reply) => {
  return reply
    .response({
      message: 'sorry'
    })
    .code(404)
}
