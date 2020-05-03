import { Server } from '@hapi/hapi'
import to from 'await-to-js'
import { Options } from 'hapi-pino'

import { isProduction } from 'utils/isProd'

/* eslint-disable @typescript-eslint/no-var-requires */
const HapiPino = require('hapi-pino')

export async function registerPino(server: Server) {
  const [err] = await to(
    server.register({
      plugin: HapiPino,
      options: {
        logPayload: true,
        prettyPrint: !isProduction,
      } as Options,
    })
  )

  if (err) {
    console.error('error', `could not register the HapiPino plugin, ${err} 🚫`)
    process.exit(1)
  }
}
