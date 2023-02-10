/* eslint-disable @next/next/no-page-custom-font */
import Footer from 'components/Footer'
import Header from 'components/Header'

import Background from './Background'

import 'styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Background header={<Header />} footer={<Footer />} page={children} />
      </body>
    </html>
  )
}
