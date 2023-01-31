import Image from 'next/image'

import Headline from 'components/Headline'

import icon from 'assets/icon.svg'

import styles from './page.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Image src={icon} alt="" width={250} height={250} />
        <h1 className={styles.name}>とし / toshi00</h1>
        <p className={styles.description}>
          メタモンと一緒に
          <br />
          ものづくりをしています
        </p>
      </div>
      <div className={styles.article}>
        <div>
          <div>
            <Headline title="プロフィール" />
            <ul>
              <li>東京工業大学 情報工学系 学部3年</li>
              <li>デジタル創作同好会traP</li>
            </ul>
          </div>
          <div>
            <Headline title="趣味" />
            <ul>
              <li>電子工作</li>
              <li>メタモン</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <Headline title="言語とか" />
            <ul>
              <li>React / Vue</li>
              <li>Go</li>
              <li>Arduino / C</li>
            </ul>
          </div>
          <div>
            <Headline title="リンク" />
          </div>
        </div>
      </div>
    </div>
  )
}
