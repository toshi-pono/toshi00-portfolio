import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        design/created by{' '}
        <a
          href="https://github.com/toshi-pono/toshi00-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          toshi00
        </a>
      </p>
    </footer>
  )
}

export default Footer
