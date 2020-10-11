import { Manifest } from '@hapi/glue'
import { Options } from 'hapi-pino'
import { join } from 'path'
import { isProduction } from 'utils/isProd'

import { users } from './plugins/users'

/* eslint-disable @typescript-eslint/no-var-requires */
const Vision = require('@hapi/vision')
const inert = require('@hapi/inert')
const devErrors = require('hapi-dev-errors')
const HapiPino = require('hapi-pino')

export const manifest: Manifest = {
  server: {
    port: 3000,
    host: '0.0.0.0',
    routes: {
      // inert plugin config
      files: {
        relativeTo: join(__dirname, 'public'),
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: Vision,
      },
      {
        plugin: inert,
      },
      {
        plugin: devErrors,
        options: {
          showErrors: !isProduction,
        },
      },
      {
        plugin: HapiPino,
        options: {
          logPayload: true,
          prettyPrint: !isProduction,
        } as Options,
      },
      {
        plugin: users,
      },
    ],
  },
}
