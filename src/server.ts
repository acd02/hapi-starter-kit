import * as Hapi from 'hapi'

import { registerDevErrors, registerPino, registerViewEngine } from './plugins'
import { routes } from './routes'

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000
})

server.route(routes)

async function init() {
  await registerPino(server)
  await registerDevErrors(server)
  await registerViewEngine(server)
  await server
    .start()
    .then(() => server.log('info', `Server running at: ${server.info.uri} ✅`))
    .catch(e => console.error(`server could not start ${e} 🚫`))
}

init()
