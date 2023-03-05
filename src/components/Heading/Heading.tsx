import React from 'react'
import classNames from 'classnames'
import styles from './heading.module.scss'

interface Props {
  level?: number
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color?: 'black' | 'primary' | 'secondary' | 'white'
  className?: string
  children?: React.ReactNode
}

const Heading: React.FC<Props> = ({ children, level, size, className, color }) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <TagName
      className={classNames(
        { [styles[size ?? 'xxl']]: size },
        { [styles[color ?? 'black']]: color },
        { [className ?? '']: className },
      )}
    >{children}</TagName>
  )
}

Heading.defaultProps = {
  level: 1,
  size: 'xxl',
  color: 'black',
}

export default Heading
