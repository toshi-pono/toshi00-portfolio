'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import TagList from 'components/TagList'

import { filterWorks, tags } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const parseTags = (tagQuery: string | null) => {
  if (tagQuery === null) return tags
  return tagQuery === '' ? [] : tagQuery.split(',')
}

const Works = () => {
  // HACK?: useSearchParamsの更新が遅い？のでuseStateで管理
  const selectedTagQuery = useSearchParams().get('tag')
  const router = useRouter()

  const [selectedTags, setSelectedTags] = useState<string[]>(
    parseTags(selectedTagQuery)
  )
  const works = filterWorks(selectedTags)
  const handleChange = (tag: string) => {
    let newTags
    if (selectedTags.includes(tag)) {
      newTags = selectedTags.filter((t) => t !== tag)
    } else {
      newTags = [...selectedTags, tag]
    }
    setSelectedTags(newTags)
    router.push(`/works?tag=${newTags.join(',')}`)
  }
  useEffect(() => {
    // TODO?: 再レンダリング走るけどいい感じの解決策ないかな
    setSelectedTags(parseTags(selectedTagQuery))
  }, [selectedTagQuery])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Works<span className={styles.subtitle}>｜制作物</span>
      </h1>
      <TagList tags={tags} selectedTags={selectedTags} onClick={handleChange} />
      <div className={styles.cards}>
        {works.map((work) => (
          <Card key={work.id} work={work} />
        ))}
      </div>
    </div>
  )
}

export default Works
