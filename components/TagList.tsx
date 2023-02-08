import Link from 'next/link'

import { toggleTagQuery, isSelected } from 'libs/tag'

import styles from './TagList.module.scss'

interface Props {
  tags: string[]
  selectedTags: string[]
}

const TagList = ({ tags, selectedTags }: Props) => {
  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/works?tag=${toggleTagQuery(tag, selectedTags)}`}
          className={`${styles.tag} ${
            isSelected(tag, selectedTags) && styles.selected
          }`}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}

export default TagList
