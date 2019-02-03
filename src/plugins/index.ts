import { Server } from 'hapi'
import * as path from 'path'

const devErrors = require('hapi-dev-errors')
const Handlebars = require('handlebars')
const Vision = require('vision')
const Good = require('good')

export async function registerViewEngine(server: Server) {
  await server.register({
    plugin: Vision,
    options: {}
  })

  server.log('info', 'registerViewEngine ✅')

  const viewPath = path.resolve(__dirname, '../', 'views')

  server.views({
    engines: { hbs: Handlebars },
    relativeTo: __dirname,
    path: viewPath,
    layoutPath: path.resolve(viewPath, 'layouts'),
    layout: 'index',
    helpersPath: path.resolve(__dirname, '../', 'helpers'),
    context: {
      title: 'Document'
    },
    isCached: process.env.NODE_ENV === 'production'
  })
}

export async function registerDevErrors(server: Server) {
  await server.register({
    plugin: devErrors,
    options: {
      showErrors: process.env.NODE_ENV !== 'production'
    }
  })

  server.log('info', 'registerDevErrors ✅')
}

export async function registerLogging(server: Server) {
  await server.register({
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
            args: [{ log: '*', request: '*', response: '*' }]
          },
          {
            module: 'good-console'
          },
          'stdout'
        ]
      }
    }
  })

  server.log('info', 'registerLogging ✅')
}
