import { Noto_Sans_JP } from '@next/font/google'

import styles from './Footer.module.scss'

const notoSansJP = Noto_Sans_JP({
  subsets: ['japanese'],
  weight: ['400'],
})

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${notoSansJP.className}`}>
      <p>
        design/created by{' '}
        <a href="https://github.com/toshi-pono/toshi00-portfolio">toshi00</a>
      </p>
    </footer>
  )
}

export default Footer
