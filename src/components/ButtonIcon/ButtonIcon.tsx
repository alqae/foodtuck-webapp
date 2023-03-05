import React from 'react'
import classNames from 'classnames'
import styles from './button-icon.module.scss'

import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  size?: number
  color?: 'primary' | 'secondary'
}

const ButtonIcon: React.FC<Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  icon: Icon,
  size,
  color,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.buttonIcon,
        {
          [styles[color ?? 'primary']]: color,
          [className ?? '']: className,
        }
      )}
      {...props}
    >
      <Icon size={size} />
    </button>
  )
}

ButtonIcon.defaultProps = {
  size: 24,
  color: 'primary'
}

export default ButtonIcon
