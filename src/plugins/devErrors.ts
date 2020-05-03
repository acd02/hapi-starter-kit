import { Server } from '@hapi/hapi'
import to from 'await-to-js'
import { isProduction } from 'utils/isProd'
/* eslint-disable @typescript-eslint/no-var-requires */
const devErrors = require('hapi-dev-errors')

export async function registerDevErrors(server: Server) {
  const [err] = await to(
    server.register({
      plugin: devErrors,
      options: {
        showErrors: !isProduction,
      },
    })
  )

  if (err) {
    console.error(`could not register the devErrors plugin, ${err} 🚫`)
    process.exit(1)
  }
}
