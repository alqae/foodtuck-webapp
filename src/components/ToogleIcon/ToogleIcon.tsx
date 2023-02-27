import React from 'react'
import classNames from 'classnames'
import { IconType } from 'react-icons'
import styles from './toogle.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

interface Props  extends Omit<React.ComponentProps<'div'>, 'className'> {
  isToggled: boolean
  onToggleClicked: () => void
  IconClosed: IconType
  IconOpen: IconType
  shouldReduceMotion: boolean | null
  classes?: string
  iconPosition?: 'left' | 'right'
  size?: number
}


const toggleIconClosed = {
  rotate: 180,
  scale: 0,
  opacity: 0,
  transition: {
    duration: 0.2,
  },
}

const toggleIconOpen = {
  rotate: 0,
  scale: 1,
  opacity: 1,
  transition: {
    duration: 0.2,
  },
}

const ToogleIcon: React.FC<Props> = ({
  children,
  isToggled,
  onToggleClicked,
  IconClosed,
  IconOpen,
  shouldReduceMotion,
  classes,
  iconPosition,
  size,
  ...rest
}) => {
  return (
    <>
    {children && iconPosition === 'right' && children}
    <div
      key={'toggle-icon-wrap'}
      tabIndex={0}
      onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
        event.key === 'Enter' && onToggleClicked()
      }
      aria-keyshortcuts={'Enter'}
      onClick={onToggleClicked}
      className={
        classes
          ? classNames(classes, styles.toggleIconWrap)
          : styles.toggleIconWrap
      }
      {...rest}
    >
      <AnimatePresence initial={false}>
        {!isToggled ? (
          <motion.span
            key="toggle-icon-span-closed"
            initial={toggleIconClosed}
            animate={!shouldReduceMotion ? toggleIconOpen : toggleIconClosed}
            exit={toggleIconClosed}
            aria-current={!isToggled}
            className={styles.toggleSpan}
          >
            <IconClosed className={styles.icon} size={size} />
          </motion.span>
        ) : (
          <motion.span
            key="toggle-icon-span-open"
            initial={toggleIconClosed}
            animate={!shouldReduceMotion ? toggleIconOpen : toggleIconClosed}
            exit={toggleIconClosed}
            aria-current={isToggled}
            className={styles.toggleSpan}
          >
            <IconOpen className={styles.icon} size={size} />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    {children && iconPosition === 'left' && children}
  </>
  )
}

ToogleIcon.defaultProps = {
  iconPosition: 'right',
  size: 24,
}

export default ToogleIcon
