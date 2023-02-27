import React from 'react'
import classNames from 'classnames'
import styles from './breadcrumbs.module.scss'
import { AiOutlineRight } from 'react-icons/ai'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

interface Props {}

const Breadcrumb: React.FC<Props> = () => {
  const breadcrumbs = useBreadcrumbs()

  return (
    <div className={classNames(styles.container, 'd--f', 'fd--c', 'jc--c', 'ai--c')}>
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

Breadcrumb.defaultProps = {}

export default Breadcrumb
