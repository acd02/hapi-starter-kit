import * as React from 'react'
import { Option } from 'fp-ts/lib/Option'

type Item = {
  label: string
  id: number
}

type Props = {
  maybeIdParam: Option<string>
  maybeQueryString: Option<string>
  items: Item[]
}

function Index(props: Props) {
  const { maybeIdParam, maybeQueryString, items } = props

  return (
    <>
      {maybeIdParam.map(param => <div>id param: {param}</div>).toUndefined()}
      {maybeQueryString.map(query => <div>query string: {query}</div>).toUndefined()}
      {items.length && (
        <ul>
          {items.map(item => (
            <li>{item.label}</li>
          ))}
        </ul>
      )}
    </>
  )
}

module.exports = Index
