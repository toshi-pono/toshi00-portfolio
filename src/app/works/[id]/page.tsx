import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  MdApps,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdUpdate,
} from 'react-icons/md'

import ExternalLink from '@/components/ExternalLink'
import ImageSlider from '@/components/ImageSlider'
import { works, getWork, getNextWorkId, getPrevWorkId } from '@/data/works'

import styles from './page.module.scss'

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }))
}

const Work = ({ params }: { params: { id: string } }) => {
  const work = getWork(params.id)

  if (work === undefined) {
    notFound()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          {work.title}
          <span className={styles.subtitle}>｜{work.subtitle}</span>
        </h1>
        <div className={styles.support}>
          <p className={styles.date}>
            <MdUpdate className={styles.icon} />
            {work.date}
          </p>
          <div className={styles.taglist}>
            {work.tags.map((tag) => (
              <Link key={tag} className={styles.tag} href={`/works?tag=${tag}`}>
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <section className={styles.article}>
        <p>{work.description}</p>
        <ul className={styles.linkList}>
          {work.links.map((link) => (
            <li key={link.url}>
              <ExternalLink href={link.url}>{link.name}</ExternalLink>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.images}>
        <ImageSlider images={work.images} color={work.color} />
      </section>
      <nav className={styles.navigation}>
        <Link
          href={`/works/${getPrevWorkId(work.id)}`}
          className={styles.link}
          aria-label="一つ前の制作物を見る"
        >
          <MdArrowBackIosNew className={styles.icon} />
        </Link>
        <Link
          href="/works"
          className={styles.link}
          aria-label="制作物一覧に戻る"
        >
          <MdApps className={styles.icon} />
        </Link>
        <Link
          href={`/works/${getNextWorkId(work.id)}`}
          className={styles.link}
          aria-label="一つ後の制作物を見る"
        >
          <MdArrowForwardIos className={styles.icon} />
        </Link>
      </nav>
    </div>
  )
}

export default Work
