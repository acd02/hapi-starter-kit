import { Server } from '@hapi/hapi'

import { registerDevErrors } from './devErrors'
import { registerPino } from './pino'
import { registerViewEngine } from './viewEngine'

export async function registerPlugins(server: Server) {
  registerViewEngine(server)
  registerDevErrors(server)
  registerPino(server)
}
