import React from 'react'
import styles from './badge-count.module.scss'

interface Props {
  count: number
  message: string | React.ReactNode
}

const BadgeCount: React.FC<Props> = ({ count, message }) => {
  return (
    <div className={`${styles.badgeCount} d--f`}>
      <span className={`${styles.number} mr-6`}>{count}+</span>
      <div className={styles.text}>
        {typeof message === 'string' ? <p>{message}</p> : message}
      </div>
    </div>
  )
}

BadgeCount.defaultProps = {}

export default BadgeCount