import ExternalLink from 'components/ExternalLink'

import { Log } from 'data/logs'

import styles from './LogCard.module.scss'

interface Props {
  log: Log
}

const LogCard = ({ log }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.date}>
        <p>{`${log.year}年 ${log.month}月`}</p>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{log.title}</h2>
        <p className={styles.description}>{log.description}</p>
        {log.links && (
          <ul className={styles.links}>
            {log.links.map((link) => (
              <li key={link.name}>
                <ExternalLink href={link.url}>{link.name}</ExternalLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default LogCard
