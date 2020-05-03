import { ServerRoute } from '@hapi/hapi'
import { notFoundHandler } from 'handlers/404'
import { rootHandler } from 'handlers/index'
import { getUser } from 'handlers/users/getUser'
import { getUsers } from 'handlers/users/getUsers'
import { Params } from 'utils/params'

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
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
    path: '/css/{file*}',
    handler: {
      directory: {
        path: 'css',
      },
    },
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: notFoundHandler,
  },
]
