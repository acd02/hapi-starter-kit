import * as React from 'react'

type Props = {
  title: string
}

function LayoutView({ children, title }: Props & React.Props<{}>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/css/reset.css" />
        <title>{title}</title>
      </head>
      <body dangerouslySetInnerHTML={{ __html: children as string }} />
    </html>
  )
}

/* eslint-disable fp/no-mutation */
module.exports = LayoutView
