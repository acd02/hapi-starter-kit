import { Lifecycle } from 'hapi'

import { getQueryString, getUrlParam } from '../utils'

export const rootHandler: Lifecycle.Method = (request, reply) => {
  const maybeQueryString = getQueryString(request, 'name') ?? ''
  const maybeIdParam = getUrlParam(request, 'id') ?? ''

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

export const someDataHandler: Lifecycle.Method = (_request, reply) => {
  return reply
    .response({
      hey: 'you'
    })
    .code(200)
}

export const somePostDataHandler: Lifecycle.Method = (request, reply) => {
  return reply.response(request.payload).code(200)
}
