import { logs } from 'data/logs'

import LogCard from './LogCard'
import styles from './page.module.scss'

const Logs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Logs</h1>
      <ul className={styles.logs}>
        {logs.map((log) => (
          <li key={log.id}>
            <LogCard log={log} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Logs
