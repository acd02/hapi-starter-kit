import * as React from 'react'

type Item = {
  label: string
  id: number
}

type Props = {
  maybeIdParam?: string
  maybeQueryString?: string
  items: Item[]
}

function Index(props: Props) {
  const { maybeIdParam, maybeQueryString, items } = props

  return (
    <>
      {maybeIdParam && <div>id param: {maybeIdParam}</div>}
      {maybeQueryString && <div>query string: {maybeQueryString}</div>}
      {items.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      )}
    </>
  )
}

/* eslint-disable fp/no-mutation */
module.exports = Index
