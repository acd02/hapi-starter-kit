import * as React from 'react'

type Props = {
  title: string
}

function LayoutView(props: Props & React.Props<{}>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{props.title}</title>
      </head>
      <body dangerouslySetInnerHTML={{ __html: props.children as string }} />
    </html>
  )
}

module.exports = LayoutView
