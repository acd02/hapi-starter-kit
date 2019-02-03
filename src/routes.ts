import { ServerRoute } from 'hapi'

import { rootHandler, notFoundHandler } from './handlers'

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
    path: `/{any*}`,
    handler: notFoundHandler
  }
]
