import React from 'react'
import styles from './button.module.scss'

interface Props {
  children?: React.ReactNode
  soft?: boolean
  rounded?: boolean,
  fullWidth?: boolean,
  className?: string
}

export default ({
  children,
  className,
  soft = false,
  rounded = false,
  fullWidth = true,
  ...props
}: Props & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
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