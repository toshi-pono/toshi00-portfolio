import Link from 'next/link'

import styles from './TagList.module.scss'

interface Props {
  tags: string[]
  selectedTags: string[]
  onClick: (tag: string) => void
}

const TagList = ({ tags, selectedTags, onClick }: Props) => {
  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.tag} ${
            selectedTags.includes(tag) && styles.selected
          }`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export default TagList
