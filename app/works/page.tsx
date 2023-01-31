import { works } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const Works = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Works</h1>
      <div className={styles.cards}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
