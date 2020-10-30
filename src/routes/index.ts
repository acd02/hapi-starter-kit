import { ServerRoute } from '@hapi/hapi'

import { notFoundHandler } from './404'
import { rootHandler } from './root'

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/',
    handler: rootHandler,
  },
  {
    method: 'GET',
    path: '/css/{file*}',
    options: {
      cache: {
        privacy: 'private',
      },
    },
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
