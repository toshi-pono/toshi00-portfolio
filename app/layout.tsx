/* eslint-disable @next/next/no-page-custom-font */
import Image from 'next/image'

import Footer from 'components/Footer'
import Header from 'components/Header'

import rukachi from 'assets/rukachi.svg'
import backgroundTV from 'assets/tv.svg'

import 'styles/globals.scss'
import styles from './layout.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
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
        <div className={styles.container}>
          <Image
            src={backgroundTV}
            alt=""
            width={1920}
            height={1080}
            className={styles.bgImage}
            draggable={false}
            priority
          />
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.mainWrapper}>
            <div className={styles.main}>
              <main className={styles.article}>
                <div>{children}</div>
              </main>
              <Image
                src={rukachi}
                alt=""
                width={581}
                height={662}
                className={styles.rukachi}
                draggable={false}
                priority
              />
            </div>
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
