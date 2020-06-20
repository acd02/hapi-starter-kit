import { Plugin, Server, ServerRoute } from '@hapi/hapi'
import to from 'await-to-js'
import { Params } from 'utils/params'

import { usersHandlers } from './handlers'

const users: Plugin<{}> = {
  name: 'users',
  version: '1.0.0',
  register: function (server) {
    const routes: ServerRoute[] = [
      {
        ...usersHandlers.getUsers,
        path: '/users',
      },
      {
        ...usersHandlers.getUser,
        path: `/users/{${Params.id}}`,
      },
      {
        ...usersHandlers.postUser,
        path: '/users',
      },
    ]
    server.route(routes)
  },
}

export async function registerUsers(server: Server) {
  const [err] = await to(
    server.register({
      plugin: users,
      options: {},
    })
  )

  if (err) {
    console.error(`could not register the users plugin, ${err} 🚫`)
    process.exit(1)
  }
}
