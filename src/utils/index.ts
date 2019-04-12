import { Option, fromNullable } from 'fp-ts/lib/Option'

export function getQueryString(query?: string | string[]): Option<string> {
  return fromNullable(Array.isArray(query) ? query[0]: query)
}

export function getUrlParam(param?: string): Option<string> {
  return fromNullable(param)
}
