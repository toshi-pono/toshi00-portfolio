'use client'
import { useSearchParams } from 'next/navigation'

import TagList from 'components/TagList'

import { filterWorks, tags } from 'data/works'
import { toTagList } from 'libs/tag'

import Card from './Card'
import styles from './page.module.scss'

const Works = () => {
  const searchParams = useSearchParams()
  const selectedTags = toTagList(searchParams.get('tag'), tags)
  const works = filterWorks(selectedTags)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Works｜制作物</h1>

      <TagList tags={tags} selectedTags={selectedTags} />
      <div className={styles.cards}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
