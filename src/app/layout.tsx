import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

import Background from './Background'

import '@/styles/globals.scss'

export const metadata: Metadata = {
  metadataBase: new URL('https://toshi00.dev'),
  title: {
    absolute: 'about | toshi00.dev',
    template: '%s | toshi00.dev',
    default: 'toshi00.dev',
  },
  description: 'ものづくりをしています。toshi00のポートフォリオです',
  keywords: ['toshi00', 'portfolio', 'web', 'frontend', 'ものづくり'],
  creator: 'toshi00',
  twitter: {
    card: 'summary_large_image',
    site: '@toshi00_p',
    creator: '@toshi00_p',
  },
  openGraph: {
    type: 'website',
    url: 'https://toshi00.dev',
    title: 'toshi00.dev',
    description: 'ものづくりをしています。toshi00のポートフォリオです',
    siteName: 'toshi00.dev',
  },
}

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
