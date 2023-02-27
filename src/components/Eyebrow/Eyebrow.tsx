import React from 'react'
import classNames from 'classnames'
import styles from './eyebrow.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
}

const Eyebrow: React.FC<Props> = ({ className, children }) => {
  return (
    <span className={classNames(styles.eyebrow, { [className ?? '']: className })}>
      {children}
    </span>
  )
}

Eyebrow.defaultProps = {}

export default Eyebrow
