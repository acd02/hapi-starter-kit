import { Server } from '@hapi/hapi'

import { registerPino } from './pino'
import { registerViewEngine } from './viewEngine'
import { registerDevErrors } from './devErrors'

export async function registerPlugins(server: Server) {
  registerViewEngine(server)
  registerDevErrors(server)
  registerPino(server)
}
