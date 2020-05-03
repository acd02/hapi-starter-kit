import { ServerRoute } from '@hapi/hapi'
import { notFoundHandler } from 'handlers/404'
import { rootHandler } from 'handlers/index'
import { getUser } from 'handlers/users/getUser'
import { getUsers } from 'handlers/users/getUsers'
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
