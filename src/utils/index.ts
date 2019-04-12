import { Request } from 'hapi'
import { Option, fromNullable } from 'fp-ts/lib/Option'
import { head } from 'fp-ts/lib/Array'

export function getQueryString(request: Request, queryKey: string): Option<string> {
  return fromNullable(Object.entries(request.query))
    .filter(queries => queries.length > 0)
    .chain(queries =>
      head(
        queries
          .filter(([key]) => key === queryKey)
          .map(([_key, value]) => (Array.isArray(value) ? value[0] : value))
      )
    )
}

export function getUrlParam(paramsArray: string[]): Option<string> {
  return head(paramsArray)
}
