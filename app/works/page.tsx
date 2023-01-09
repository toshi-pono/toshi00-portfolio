import { Noto_Sans_JP } from '@next/font/google'

import { works } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const notoSansJP = Noto_Sans_JP({
  subsets: ['japanese'],
  weight: ['500'],
})

const Works = () => {
  return (
    <>
      <h1 className={`${styles.title} ${notoSansJP.className}`}>Works</h1>
      <div className={`${styles.container}`}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </>
  )
}

export default Works
