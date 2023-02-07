import Image from 'next/image'
import Link from 'next/link'

import { toImagePath, Work } from 'data/works'

import styles from './Card.module.scss'

const Card = ({ work }: { work: Work }) => {
  const img =
    work.images.length > 0
      ? toImagePath(work.images[0].path)
      : '/works/fallback.svg'
  return (
    <Link href={`/works/${work.id}`} className={styles.link}>
      <section className={styles.container}>
        <Image
          src={img}
          alt=""
          className={styles.image}
          width={300}
          height={250}
        />
        <div className={styles.info}>
          <h2>{work.title}</h2>
          <p className={styles.subTitle}>{work.subtitle}</p>
        </div>
      </section>
    </Link>
  )
}

export default Card
