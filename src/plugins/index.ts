import { Server } from '@hapi/hapi'

import { registerDevErrors } from './devErrors'
import { registerInert } from './inert'
import { registerPino } from './pino'
import { registerViewEngine } from './viewEngine'

export async function registerPlugins(server: Server) {
  registerViewEngine(server)
  registerInert(server)
  registerDevErrors(server)
  registerPino(server)
}
