import { Request } from 'hapi'
import { Option, fromNullable } from 'fp-ts/lib/Option'

import { QueryStrings, Params } from '../routes'

export function getQueryString(
  request: Request,
  query: keyof typeof QueryStrings
): Option<string> {
  const queryValue = request.query[query]

  return fromNullable(Array.isArray(queryValue) ? queryValue[0] : queryValue)
}

export function getUrlParam(
  request: Request,
  param: keyof typeof Params
): Option<string> {
  return fromNullable(request.params[param])
}
