'use client'
import Link from 'next/link'
import { useState } from 'react'

import styles from './Menu.module.scss'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev)
  }
  const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setIsOpen(false)
  }
  return (
    <>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
        onClick={handleOpenMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        onClick={handleCloseMenu}
        className={`${styles.background} ${isOpen ? styles.active : ''}`}
      >
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/" className={styles.item}>
                About<span className={styles.subitem}>｜自己紹介</span>
              </Link>
            </li>
            <li>
              <Link href="/works" className={styles.item}>
                Works<span className={styles.subitem}>｜制作物</span>
              </Link>
            </li>
            <li>
              <Link href="/logs" className={styles.item}>
                Logs<span className={styles.subitem}>｜インターンとか</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
