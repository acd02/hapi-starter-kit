import * as React from 'react'

type Props = {
  title?: string
}

export function MainLayout({
  children,
  title = 'no title',
}: Props & React.PropsWithChildren<unknown>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/css/reset.css" />
        <title>{title}</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
