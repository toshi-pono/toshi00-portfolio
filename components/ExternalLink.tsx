import { HiExternalLink } from 'react-icons/hi'

import styles from './ExternalLink.module.scss'

interface Props {
  children: React.ReactNode
  href: string
}

const ExternalLink = ({ children, href }: Props) => {
  return (
    <a href={href} className={styles.link} target="_blank" rel="noreferrer">
      {children}
      <HiExternalLink />
    </a>
  )
}

export default ExternalLink
