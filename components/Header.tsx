'use client'

import { Noto_Sans_JP } from '@next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Header.module.scss'

const notoSansJP = Noto_Sans_JP({
  subsets: ['japanese'],
  weight: ['400', '500'],
})

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const pathname = usePathname()

  return (
    <header
      className={`${styles.header} ${notoSansJP.className} ${className ?? ''}`}
    >
      <Link className={styles.title} href="/">
        toshi00.dev
      </Link>
      <nav className={styles.navigation}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>
          about
        </Link>
        <Link
          href="/works"
          className={pathname?.startsWith('/works') ? styles.active : ''}
        >
          works
        </Link>
        <Link
          href="/logs"
          className={pathname?.startsWith('/logs') ? styles.active : ''}
        >
          logs
        </Link>
      </nav>
    </header>
  )
}

export default Header
