import { HiExternalLink } from 'react-icons/hi'

import styles from './ExternalLink.module.scss'

interface Props {
  text: string
  href: string
}

const ExternalLink = ({ text, href }: Props) => {
  return (
    <a href={href} className={styles.link} target="_blank" rel="noreferrer">
      {text}
      <HiExternalLink />
    </a>
  )
}

export default ExternalLink
