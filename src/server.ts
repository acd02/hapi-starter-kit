import * as Hapi from 'hapi'

import { registerDevErrors, registerLogging, registerViewEngine } from './plugins'
import { routes } from './routes'

const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
})

server.route(routes)

async function start() {
  await registerLogging(server)
  await registerDevErrors(server)
  await registerViewEngine(server)
  await server.start()

  server.log('info', `Server running at: ${server.info.uri} ✅`)
}

start()
