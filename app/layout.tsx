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
      <head />
      <body>
        <div className={styles.container}>
          <Image
            src={backgroundTV}
            alt=""
            width={1920}
            height={1080}
            className={styles.bgImage}
            draggable={false}
          />
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.main}>
            <main>{children}</main>
            <Image
              src={rukachi}
              alt=""
              width={581}
              height={662}
              className={styles.rukachi}
              draggable={false}
            />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
