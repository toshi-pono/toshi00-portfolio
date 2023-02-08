import Image from 'next/image'
import Link from 'next/link'

import ExternalLink from 'components/ExternalLink'
import Headline from 'components/Headline'

import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image src="/bg/icon.svg" alt="" width={250} height={250} />
        <h1 className={styles.name}>とし / toshi00</h1>
        <p className={styles.description}>
          Webフロントエンド
          <br />
          ものづくりをしています
        </p>
      </div>
      <div className={styles.phoneInfoContainer}>
        <div className={styles.phoneInfo}>
          <Image src="/bg/icon.svg" alt="" width={100} height={100} />
          <div className={styles.name}>
            <p>フロントエンド & ものづくり</p>
            <h1>toshi00</h1>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div>
          <Headline title="プロフィール" />
          <ul>
            <li>toshi00（とし）</li>
            <li>東京工業大学 情報工学系 B3</li>
            <li>デジタル創作同好会traP</li>
          </ul>
        </div>
        <div>
          <Headline title="言語とか" />
          <p>TypeScript / React / Vue / Go / Arduino / C</p>
        </div>
        <div>
          <Headline title="実績とか" />
          <ul>
            <li>WebSpeedHackathon for Student(2022)：2位</li>
            <li>DeNAインターン2022：優勝</li>
          </ul>
          <Link href="/logs" className={styles.seeMore}>
            もっと見る
          </Link>
        </div>
        <div>
          <Headline title="リンク" />
          <ul>
            <li>
              <ExternalLink href="https://github.com/toshi-pono">
                Github
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
        </div>
        <div className={styles.phoneOnly}>
          <Headline title="制作物とか" />
          <ul>
            <li>
              <Link href="/works/fooder">ごはん屋さん即決アプリ Fooder</Link>
            </li>
            <li>
              <Link href="/works/typoime">
                エンジニアは絶対に使えないRust製IME TypoIME
              </Link>
            </li>
            <li>
              <Link href="/works/root-san">グループ割り勘計算アプリ ROOT3</Link>
            </li>
          </ul>
          <Link href="/works" className={styles.seeMore}>
            もっと見る
          </Link>
        </div>
      </div>
    </div>
  )
}
