import { Request } from 'hapi'
import { Option } from 'fp-ts/lib/Option'
import { head } from 'fp-ts/lib/Array'

export function getQueryStrings(request: Request, queryKey: string): string[] {
  return Object.entries(request.query)
    .filter(([key]) => key === queryKey)
    .map(([_key, value]) => <string>value)
}

export function getUrlParam(request: Request, paramKey: string): Option<string> {
  return head(
    Object.entries(request.params)
      .filter(([key]) => key === paramKey)
      .map(([_key, value]) => value)
  )
}
