import React from 'react'
import classNames from 'classnames'
import styles from './expansion-panel.module.scss'
import { VscRemove, VscAdd } from 'react-icons/vsc'
import { motion, useCycle, useReducedMotion } from 'framer-motion'

import { ToogleIcon } from '../ToogleIcon'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'

interface Props {
  className?: string
  title?: string
  description?: string
}

const ExpansionPanel: React.FC<Props> = ({ title, description, className }) => {
  const [expanded, setExpanded] = useCycle(true, false)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={classNames(styles.panel, { [className ?? '']: className })}>
      <div
        className={classNames(styles.panelHeading, 'p-3', 'd--f', 'jc--sb', 'ai--c')}
        onClick={() => setExpanded(expanded ? 1 : 0)}
      >
        <Heading size="sm" level={4}>{title}</Heading>

        <ToogleIcon
          IconClosed={VscRemove}
          IconOpen={VscAdd}
          isToggled={expanded}
          shouldReduceMotion={shouldReduceMotion}
          onToggleClicked={setExpanded}
          size={32}
        />
      </div>

      {!expanded && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
          className={classNames(styles.panelBody, 'pl-3', 'pr-3', 'pb-3')}
        >
          <Paragraph>{description}</Paragraph>
        </motion.div>
      )}
    </div>
  )
}

ExpansionPanel.defaultProps = {}

export default ExpansionPanel
