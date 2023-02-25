import React from 'react'
import styles from './button.module.scss'

interface Props {
  children?: React.ReactNode
  soft?: boolean
  rounded?: boolean
  circular?: boolean
  fullWidth?: boolean
  transparent?: boolean
  className?: string
}

const Button: React.FC<Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  className,
  soft,
  rounded,
  fullWidth,
  circular,
  transparent,
  ...props
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${soft && styles.soft}
        ${rounded && styles.rounded}
        ${fullWidth && styles.fullWidth}
        ${circular && styles.circular}
        ${transparent && styles.transparent}
        ${className}
      `} {...props}
      >{children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  soft: false,
  rounded: false,
  fullWidth: true,
}

export default Button
