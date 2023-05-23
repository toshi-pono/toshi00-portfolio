import { Analytics } from '@vercel/analytics/react'
import { Noto_Sans_JP } from 'next/font/google'

import Footer from 'components/Footer'
import Header from 'components/Header'

import Background from './Background'

import 'styles/globals.scss'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  preload: false,
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Background header={<Header />} footer={<Footer />} page={children} />
        <Analytics />
      </body>
    </html>
  )
}
