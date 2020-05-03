import { ServerRoute } from '@hapi/hapi'

import { rootHandler } from 'handlers/index'
import { notFoundHandler } from 'handlers/404'
import { getUsers } from 'handlers/users/getUsers'
import { getUser } from 'handlers/users/getUser'

import { Params } from 'utils/params'

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: `/{${Params.id}?}`,
    handler: rootHandler,
  },

  {
    ...getUsers,
    path: '/users',
  },
  {
    ...getUser,
    path: `/users/{${Params.id}}`,
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: notFoundHandler,
  },
]
