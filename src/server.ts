import * as Hapi from 'hapi'
import to from 'await-to-js'
import { fromNullable } from 'fp-ts/lib/Option'
import { catOptions, isEmpty } from 'fp-ts/lib/Array'

import { registerLogging, registerViewEngine, registerDevErrors } from './plugins'
import { routes } from './routes'

const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
})

server.route(routes)

async function start() {
  const [registerLoggingErr] = await to(registerLogging(server))
  const [registerDevErrorsErr] = await to(registerDevErrors(server))
  const [registerViewEngineErr] = await to(registerViewEngine(server))
  const [serverStartErr] = await to(server.start())

  const errors = catOptions([
    fromNullable(registerLoggingErr),
    fromNullable(registerDevErrorsErr),
    fromNullable(registerViewEngineErr),
    fromNullable(serverStartErr)
  ]).map(err => {
    server.log('error', `could not register a plugin, ${err} 🚫`)
    process.exit(1)
  })

  isEmpty(errors) && server.log('info', `Server running at: ${server.info.uri} ✅`)
}

start()
