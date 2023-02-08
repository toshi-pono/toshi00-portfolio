'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import TagList from 'components/TagList'

import { filterWorks, tags } from 'data/works'

import Card from './Card'
import styles from './page.module.scss'

const Works = () => {
  // HACK?: useSearchParamsだけを使ったパターンだと動作がもっさりしてたので、useStateで管理してる
  const selectedTagQuery = useSearchParams().get('tag')
  const router = useRouter()

  const [selectedTags, setSelectedTags] = useState<string[]>(
    selectedTagQuery?.split(',') ?? tags
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
    setSelectedTags(selectedTagQuery?.split(',') ?? tags)
  }, [selectedTagQuery])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Works｜制作物</h1>
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
