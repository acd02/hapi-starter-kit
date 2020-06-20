import { Server } from '@hapi/hapi'

import { registerUsers } from './users'

export async function registerPlugins(server: Server) {
  registerUsers(server)
}
