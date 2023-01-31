import { MdFullscreenExit, MdFullscreen } from 'react-icons/md'

import styles from './FullScreenButton.module.scss'

interface Props {
  isFull: boolean
  onClick: () => void
}

const Toggle = ({ onClick, isFull }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {isFull ? (
        <MdFullscreenExit className={styles.icon} />
      ) : (
        <MdFullscreen className={styles.icon} />
      )}
      <p className={styles.label}>{isFull ? '縮小' : '拡大'}</p>
    </button>
  )
}

export default Toggle
