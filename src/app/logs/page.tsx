'use client'

import { useState } from 'react'

import { filterLogs, tags, defaultTags } from '@/data/logs'

import LogCard from './LogCard'
import styles from './page.module.scss'

const Logs = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(defaultTags)
  const changeTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Logs<span className={styles.subtitle}>｜インターンとか</span>
      </h1>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              changeTag(tag)
            }}
            className={`${styles.tag} ${
              selectedTags.includes(tag) ? styles.selected : ''
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <ul className={styles.logs}>
        {filterLogs(selectedTags).map((log) => (
          <li key={log.id}>
            <LogCard log={log} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Logs
