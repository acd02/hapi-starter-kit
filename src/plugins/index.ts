import to from 'await-to-js'
import { Server } from 'hapi'
import { Options } from 'hapi-pino'
import * as path from 'path'

/* eslint-disable @typescript-eslint/no-var-requires */
const devErrors = require('hapi-dev-errors')
const HapiReactViews = require('hapi-react-views')
const Vision = require('vision')
const HapiPino = require('hapi-pino')

export async function registerViewEngine(server: Server) {
  const [err] = await to(
    server.register({
      plugin: Vision,
      options: {}
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
    compileOptions: {
      layoutPath: path.resolve(viewPath, 'layouts'),
      layout: 'index'
    },
    context: {
      title: 'Document'
    },
    isCached: process.env.NODE_ENV === 'production'
  })
}

export async function registerDevErrors(server: Server) {
  const [err] = await to(
    server.register({
      plugin: devErrors,
      options: {
        showErrors: process.env.NODE_ENV !== 'production'
      }
    })
  )

  if (err) {
    console.error(`could not register the devErrors plugin, ${err} 🚫`)
    process.exit(1)
  }
}

export async function registerPino(server: Server) {
  const [err] = await to(
    server.register({
      plugin: HapiPino,
      options: {
        logPayload: true,
        prettyPrint: process.env.NODE_ENV !== 'production'
      } as Options
    })
  )

  if (err) {
    console.error('error', `could not register the HapiPino plugin, ${err} 🚫`)
    process.exit(1)
  }
}
