import to from 'await-to-js'
import { Server } from 'hapi'
import * as path from 'path'

/* eslint-disable @typescript-eslint/no-var-requires */
const devErrors = require('hapi-dev-errors')
const HapiReactViews = require('hapi-react-views')
const Vision = require('vision')
const Good = require('good')

export async function registerViewEngine(server: Server) {
  const [err] = await to(
    server.register({
      plugin: Vision,
      options: {}
    })
  )

  if (err) {
    console.error(`🚫 could not register the viewEngine plugin, ${err} 🚫`)
    process.exit(1)
  } else {
    server.log('info', 'viewEngine plugin registered ✅')
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
    console.error(`🚫 could not register the devErrors plugin, ${err} 🚫`)
    process.exit(1)
  } else {
    server.log('info', 'devErrors plugin registered ✅')
  }
}

export async function registerLogging(server: Server) {
  const [err] = await to(
    server.register({
      plugin: Good,
      options: {
        ops: {
          interval: 1000
        },
        reporters: {
          console: [
            {
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [
                {
                  log: '*',
                  request: '*',
                  response: '*',
                  error: '*'
                }
              ]
            },
            {
              module: 'good-console',
              args: [
                {
                  format: 'DD/MM/YYYY HH:mm:ss:SS'
                }
              ]
            },
            'stdout'
          ]
        }
      }
    })
  )

  if (err) {
    console.error(`🚫 could not register the goodConsole plugin, ${err} 🚫`)
    process.exit(1)
  }
  server.log('info', 'goodConsole plugin registered ✅')
}
