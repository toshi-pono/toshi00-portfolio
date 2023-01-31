'use client'
import Image from 'next/image'
import { useState } from 'react'

import rukachi from 'assets/rukachi.svg'
import backgroundTV from 'assets/tv.svg'

import styles from './Background.module.scss'

interface Props {
  header: React.ReactNode
  footer: React.ReactNode
  page: React.ReactNode
}

const Background = ({ page, header, footer }: Props) => {
  const [isZooming, setIsZooming] = useState(false)
  return (
    <div className={isZooming ? styles.zoomContainer : styles.container}>
      <Image
        src={backgroundTV}
        alt=""
        width={1920}
        height={1080}
        className={styles.bgImage}
        draggable={false}
        priority
      />
      <div className={styles.header}>{header}</div>
      <div className={styles.mainWrapper}>
        <div className={styles.main}>
          <main className={styles.article}>
            <div>{page}</div>
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
      <div className={styles.footer}>{footer}</div>
      <div className={styles.toggle}>
        <button onClick={() => setIsZooming(!isZooming)}>toggle</button>
      </div>
    </div>
  )
}

export default Background
