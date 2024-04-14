import { Suspense } from 'react'

import styles from './page.module.scss'
import WorkList from './WorkList'

const Works = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Works<span className={styles.subtitle}>｜制作物</span>
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <WorkList />
      </Suspense>
    </div>
  )
}

export default Works
