'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Header.module.scss'
import Menu from './Menu'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className={`${styles.header}`}>
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
      <div className={styles.menu}>
        <Menu />
      </div>
    </header>
  )
}

export default Header
