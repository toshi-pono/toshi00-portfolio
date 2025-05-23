import Image from 'next/image'
import Link from 'next/link'

import ExternalLink from '@/components/ExternalLink'
import Headline from '@/components/Headline'

import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image src="/bg/icon.svg" alt="" width={250} height={250} priority />
        <h1 className={styles.name}>とし / toshi00</h1>
        <p className={styles.description}>ものづくりをしています</p>
      </div>
      <div className={styles.phoneInfoContainer}>
        <div className={styles.phoneInfo}>
          <Image src="/bg/icon.svg" alt="" width={100} height={100} priority />
          <div className={styles.name}>
            <p>ものづくりをしています</p>
            <h1>toshi00</h1>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <section>
          <Headline title="所属" />
          <ul>
            <li>東京科学大学 情報工学系 M2</li>
            <li>デジタル創作同好会traP</li>
          </ul>
        </section>
        <section>
          <Headline title="言語とか" />
          <p>TypeScript / React / Vue / Go / Python</p>
        </section>
        <section>
          <Headline title="実績とか" />
          <ul>
            <li>WebSpeedHackathon for Student(2022): 2位</li>
            <li>DeNAインターン2022: 優勝</li>
          </ul>
        </section>
        <section>
          <Headline title="リンク" />
          <ul>
            <li>
              <ExternalLink href="https://github.com/toshi-pono">
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://twitter.com/toshi00_p">
                Twitter
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://trap.jp/author/toshi00/">
                traPブログ
              </ExternalLink>
            </li>
          </ul>
        </section>
        <section className={`${styles.phoneOnly} ${styles.works}`}>
          <Headline title="制作物とか" />
          <ul>
            <li>
              <Link href="/works/monoeye">
                ウェアラブル姿勢推定システム MonoEye mobile
              </Link>
            </li>
            <li>
              <Link href="/works/fooder">ごはん屋さん即決アプリ Fooder</Link>
            </li>
            <li>
              <Link href="/works/typoime">
                エンジニアは絶対に使えないRust製IME TypoIME
              </Link>
            </li>
          </ul>
          <Link href="/works" className={styles.seeMore}>
            もっと見る
          </Link>
        </section>
      </div>
    </div>
  )
}
