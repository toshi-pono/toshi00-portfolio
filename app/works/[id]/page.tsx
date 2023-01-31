import Link from 'next/link'
import { notFound } from 'next/navigation'

import ExternalLink from 'components/ExternalLink'

import { works, getWork } from 'data/works'

import styles from './page.module.scss'

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }))
}

const Work = ({ params }: { params?: any; children?: React.ReactNode }) => {
  const work = getWork(params.id)

  if (work === undefined) {
    notFound()
  }

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title}`}>
        <h1>{work.title}</h1>
        <div className={styles.taglist}>
          {work.tags.map((tag) => (
            <p key={tag} className={styles.tag}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
      <section className={styles.article}>
        <p>{work.description}</p>
        <h2>リンク</h2>
        <ul className={styles.linkList}>
          {work.links.map((link) => (
            <li key={link.url}>
              <ExternalLink text={link.name} href={link.url} />
            </li>
          ))}
        </ul>
      </section>
      <Link href="/works" className={styles.back}>
        戻る
      </Link>
    </div>
  )
}

export default Work
