import { Lifecycle } from 'hapi'

import { getQueryString, getUrlParam } from '../utils'
import { QueryStrings } from '../routes'

export const rootHandler: Lifecycle.Method = (request, reply) => {
  const maybeQueryString = getQueryString(request, QueryStrings.name)
  const maybeIdParam = getUrlParam(request.paramsArray)

  return reply.view('index', {
    title: 'Index',
    items: [
      { id: 1, label: 'this' },
      { id: 2, label: 'is' },
      { id: 3, label: 'cool' }
    ],
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
