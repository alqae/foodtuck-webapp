import { useState } from 'react'
import classNames from 'classnames'
import styles from './tabs.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { Paragraph } from '../Paragraph'

interface Props {
  tabs: {
    label: string
    content: React.ReactNode | string
  }[]
}

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className={styles.tabs}>
      <div className={classNames(styles.tabsHeader, 'd--f', 'fd--r', 'ai--c')}>
          {tabs.map((item) => (
            <Paragraph
              as="span"
              key={item.label}
              className={classNames(styles.tabHead, { [styles.selected]: item === selectedTab })}
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Paragraph>
          ))}
      </div>

      <div className={classNames(styles.tabsContent, 'pt-4')}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  tabs: []
}

export default Tabs
