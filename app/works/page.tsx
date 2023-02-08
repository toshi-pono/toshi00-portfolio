import { works } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const Works = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Works｜制作物</h1>
      <div className={styles.cards}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
