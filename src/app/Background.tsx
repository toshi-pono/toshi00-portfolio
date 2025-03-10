'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'

import FullScreenButton from '@/components/FullScreenButton'

import styles from './Background.module.scss'

interface Props {
  header: React.ReactNode
  footer: React.ReactNode
  page: React.ReactNode
}

const Background = ({ page, header }: Props) => {
  const pathname = usePathname()
  const [isZooming, setIsZooming] = useState(false)
  const onChange = useCallback(() => {
    setIsZooming((prev) => !prev)
  }, [])
  const isAbout = pathname === '/'
  return (
    <div className={isZooming ? styles.zoomBgColor : styles.bgColor}>
      <div className={isZooming ? styles.zoomContainer : styles.container}>
        <Image
          src="/bg/tv.svg"
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
            <main
              className={`${styles.article} ${isAbout ? styles.topBar : ''}`}
            >
              <div className={styles.pageContainer}>{page}</div>
            </main>
            <Image
              src="/bg/seat.svg"
              alt=""
              width={393}
              height={97}
              className={styles.seat}
              draggable={false}
              priority
            />
            <Image
              src="/bg/rukachi.svg"
              alt=""
              width={581}
              height={662}
              className={styles.rukachi}
              draggable={false}
              priority
            />
            <Image
              src="/bg/game.svg"
              alt=""
              width={308}
              height={155}
              className={styles.game}
              draggable={false}
              priority
            />
            <Image
              src="/bg/robot.svg"
              alt=""
              width={146}
              height={120}
              className={styles.robot}
              draggable={false}
              priority
            />
          </div>
        </div>
        <div className={styles.toggle}>
          <FullScreenButton isFull={isZooming} onClick={onChange} />
        </div>
      </div>
    </div>
  )
}

export default Background
