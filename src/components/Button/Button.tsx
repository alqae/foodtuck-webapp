import React from 'react'
import styles from './button.module.scss'

interface Props {
  children?: React.ReactNode
  soft?: boolean
  rounded?: boolean,
  fullWidth?: boolean,
  className?: string
}

const Button: React.FC<Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  className,
  soft,
  rounded,
  fullWidth,
  ...props
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${soft && styles.soft}
        ${rounded && styles.rounded}
        ${fullWidth && styles.fullWidth}
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
