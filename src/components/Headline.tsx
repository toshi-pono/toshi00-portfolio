import styles from './Headline.module.scss'

interface Props {
  title: string
}

const Headline = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>
}

export default Headline
