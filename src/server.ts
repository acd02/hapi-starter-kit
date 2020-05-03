import * as Hapi from '@hapi/hapi'
import { join } from 'path'

import { registerPlugins } from './plugins'
import { routes } from './routes'

const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000,
  // inert plugin config
  routes: {
    files: {
      relativeTo: join(__dirname, 'public'),
    },
  },
})

async function init() {
  await registerPlugins(server)

  server.route(routes)

  server
    .start()
    .then(() => server.log('info', `Server running at: ${server.info.uri} ✅`))
    .catch(e => console.error(`server could not start ${e} 🚫`))
}

init()
