import React from 'react'
import classNames from 'classnames'
import styles from './expansion-panel.module.scss'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { useCycle, useReducedMotion } from 'framer-motion'

import { Heading } from '../Heading'
import { ToogleIcon } from '../ToogleIcon'

interface Props {
  title?: string
  children?: React.ReactNode
}

const ExpansionPanel: React.FC<Props> = ({ title }) => {
  const [expanded, setExpanded] = useCycle(false, true)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={styles.panel}>
      <div className={classNames(styles.panelHeading, 'p-3', 'd--f', 'jc--sb')}>
        <Heading size="sm" level={4}>{title}</Heading>

        <ToogleIcon
          IconClosed={IoMdRemove}
          IconOpen={IoMdAdd}
          isToggled={expanded}
          shouldReduceMotion={shouldReduceMotion}
          onToggleClicked={setExpanded}
        />
      </div>

      <div className={styles.panelBody}></div>
    </div>
  )
}

ExpansionPanel.defaultProps = {}

export default ExpansionPanel
