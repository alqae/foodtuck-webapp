import React from 'react'
import styles from './card-icon.module.scss'

interface Props {
  icon: React.ReactNode | string
  description: React.ReactNode
  rounded?: boolean
  containerClassName?: string
  descriptionClassName?: string
  horientation?: 'vertical' | 'horizontal'
}

const CardIcon: React.FC<Props> = ({
  icon,
  description,
  horientation,
  containerClassName,
  descriptionClassName,
  rounded
}) => {
  return (
    <div className={`${styles.cardIcon} d--f ${horientation === 'vertical' ? `${styles.vertical} fd--c` : 'fd--r'} ${containerClassName ?? ''}`}>
      <div className={`${styles.icon} d--f jc--c ai--c ${rounded && styles.rounded}`}>
        {typeof icon == 'string' ? <img src={icon} alt="icon" /> : icon}
      </div>
      <div className={`${styles.description} ${descriptionClassName ?? ''}`}>{description}</div>
    </div>
  )
}

CardIcon.defaultProps = {
  horientation: 'vertical',
}

export default CardIcon
