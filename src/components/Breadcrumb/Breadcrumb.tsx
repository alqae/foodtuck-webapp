import React from 'react'
import styles from './breadcrumbs.module.scss'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { AiOutlineRight } from 'react-icons/ai'

interface Props { }

export default ({ }: Props) => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={`${styles.container} d--f fd--c jc--c ai--c`}>
      {breadcrumbs[breadcrumbs.length - 1]?.breadcrumb}
      <div className={styles.breadcrumbs}>
        {breadcrumbs.map(({ breadcrumb, key }, index) => {
          const isLastIndex = index === (breadcrumbs.length - 1)
          return (
            <React.Fragment key={key}>
              {breadcrumb}
              {!isLastIndex && <AiOutlineRight />}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
