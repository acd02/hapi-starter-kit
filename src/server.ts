import { compose } from '@hapi/glue'
import { resolve } from 'path'

import { manifest } from './manifest'
import { routes } from './routes'

const HapiReactViews = require('hapi-react-views')
const viewPath = resolve(__dirname, './', 'views')

async function init() {
  const server = await compose(manifest)

  server.views({
    engines: { tsx: HapiReactViews },
    relativeTo: __dirname,
    path: viewPath,
    isCached: process.env.NODE_ENV === 'production',
  })
  server.route(routes)

  server
    .start()
    .then(() => server.log('info', `Server running at: ${server.info.uri} ✅`))
    .catch(e => console.error(`server could not start ${e} 🚫`))
}

init()
