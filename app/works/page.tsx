import { works } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const Works = () => {
  return (
    <>
      <h1 className={styles.title}>Works</h1>
      <div className={`${styles.container}`}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </>
  )
}

export default Works
