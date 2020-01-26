import { ServerRoute } from 'hapi'

import { notFoundHandler, rootHandler, someDataHandler } from './handlers'

export enum QueryStrings {
  name = 'name'
}

export enum Params {
  id = 'id'
}

export const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: `/{${Params.id}?}`,
    handler: rootHandler
  },
  {
    method: 'GET',
    path: '/someData',
    handler: someDataHandler
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: notFoundHandler
  }
]
