import * as React from 'react'

import { MainLayout } from './layouts'

type Item = {
  label: string
  id: number
}

type Props = {
  items: Item[]
  queryStrings: string[]
  title?: string
}

function Index({ items, queryStrings, title }: Props) {
  return (
    <MainLayout title={title}>
      {displayQueryStrings(queryStrings)}
      {items.length && (
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
      )}
    </MainLayout>
  )
}

function displayQueryStrings(qs: string[]) {
  return (
    !!qs.length && (
      <>
        query strings:
        {qs.map((s, i) => (
          <span>
            {` ${s}`}
            {i < qs.length - 1 && ', '}
          </span>
        ))}
      </>
    )
  )
}

/* eslint-disable fp/no-mutation */
module.exports = Index
