import { Lifecycle } from 'hapi'

import { getQueryString, getUrlParam } from '../utils'
import { QueryStrings, Params } from '../routes'

export const rootHandler: Lifecycle.Method = (request, reply) => {
  const maybeQueryString = getQueryString(request.query[QueryStrings.name])
  const maybeIdParam = getUrlParam(request.params[Params.id])

  return reply.view('index', {
    title: 'Index',
    items: [{ id: 1, label: 'this' }, { id: 2, label: 'is' }, { id: 3, label: 'cool' }],
    maybeQueryString,
    maybeIdParam
  })
}

export const notFoundHandler: Lifecycle.Method = (_request, reply) => {
  return reply
    .response({
      message: 'sorry'
    })
    .code(404)
}
