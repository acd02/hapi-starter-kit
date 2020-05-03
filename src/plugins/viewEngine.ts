import { Server } from '@hapi/hapi'
import to from 'await-to-js'
import * as path from 'path'

/* eslint-disable @typescript-eslint/no-var-requires */
const HapiReactViews = require('hapi-react-views')
const Vision = require('@hapi/vision')

export async function registerViewEngine(server: Server) {
  const [err] = await to(
    server.register({
      plugin: Vision,
      options: {},
    })
  )

  if (err) {
    console.error(`could not register the viewEngine plugin, ${err} 🚫`)
    process.exit(1)
  }

  const viewPath = path.resolve(__dirname, '../', 'views')

  server.views({
    engines: { tsx: HapiReactViews },
    relativeTo: __dirname,
    path: viewPath,
    isCached: process.env.NODE_ENV === 'production',
  })
}
