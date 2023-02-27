import React from 'react'
import classNames from 'classnames'
import styles from './paragraph.module.scss'

interface Props {
  className?: string
  children?: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'li'
  size?: 'xl' | 'lg' | 'md' | 'sm'
  color?: 'black' | 'primary' | 'secondary' | 'white' | 'gray'
}

const Paragraph: React.FC<Props> = ({
  className,
  children,
  color,
  size,
  as,
}) => {
  const TagName = `${as}` as keyof JSX.IntrinsicElements
  return <TagName className={classNames(
    styles.paragraph,
    {
      [className ?? '']: className,
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    },
  )}>{children}</TagName>
}

Paragraph.defaultProps = {
  color: 'black',
  size: 'md',
  as: 'p',
}

export default Paragraph
