import { Server } from '@hapi/hapi'
import to from 'await-to-js'

/* eslint-disable @typescript-eslint/no-var-requires */
const inert = require('@hapi/inert')

export async function registerInert(server: Server) {
  const [err] = await to(
    server.register({
      plugin: inert,
    })
  )

  if (err) {
    console.error(`could not register the inert plugin, ${err} 🚫`)
    process.exit(1)
  }
}
