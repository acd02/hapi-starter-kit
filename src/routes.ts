import { ServerRoute } from 'hapi'

import {
  notFoundHandler,
  rootHandler,
  someDataHandler,
  somePostDataHandler
} from './handlers'

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
    method: 'POST',
    path: '/someData',
    handler: somePostDataHandler
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: notFoundHandler
  }
]
