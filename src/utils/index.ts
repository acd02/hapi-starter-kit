import { Request } from 'hapi'

import { Params, QueryStrings } from '../routes'

export function getQueryString(
  request: Request,
  queryKey: keyof typeof QueryStrings
): string | undefined {
  const queryValue = request.query[queryKey]

  return Array.isArray(queryValue) ? queryValue[0] : queryValue
}

export function getUrlParam(
  request: Request,
  paramKey: keyof typeof Params
): string | undefined {
  return request.params[paramKey]
}
