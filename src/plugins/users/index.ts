import { Plugin, ServerRoute } from '@hapi/hapi'
import { params } from 'constants/params'

import { getUser, getUsers, postUser, checkCustomErrMessageValidation } from './handlers'

export const users: Plugin<unknown> = {
  name: 'users',
  version: '1.0.0',
  register: function (server) {
    const routes: ServerRoute[] = [
      {
        ...getUsers,
        method: 'GET',
        path: '/users',
      },
      {
        ...getUser,
        method: 'GET',
        path: `/users/{${params.id}}`,
      },
      {
        ...checkCustomErrMessageValidation,
        method: 'GET',
        path: `/usersvalidation/{${params.id}}`,
      },
      {
        ...postUser,
        method: 'POST',
        path: '/users',
      },
    ]
    server.route(routes)
  },
}
