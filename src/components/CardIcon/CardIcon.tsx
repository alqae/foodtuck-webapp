import React from 'react'
import classNames from 'classnames'
import { IconType } from 'react-icons'
import { Paragraph } from '../Paragraph'
import styles from './card-icon.module.scss'

interface Props {
  icon: IconType | string
  description: React.ReactNode | string
  rounded?: boolean
  containerClassName?: string
  textColor?: 'black' | 'white'
  horientation?: 'vertical' | 'horizontal'
}

const CardIcon: React.FC<Props> = ({
  icon: Icon,
  description,
  horientation,
  containerClassName,
  textColor,
  rounded
}) => {
  return (
    <div className={
      classNames(
        styles.cardIcon,
        'd--f',
        {
          [`${styles.vertical} fd--c`]: horientation === 'vertical',
          [`${styles.horizontal} fd--r`]: horientation === 'horizontal',
          [`${containerClassName ?? ''}`]: containerClassName,
        }
      )}>
      <div className={classNames(styles.icon, 'd--f', 'jc--c', 'ai--c', { [styles.rounded]: rounded })}>
        <Icon />
      </div>
      <Paragraph
        as='span'
        className={classNames({
          'mt-1 text-center': horientation === 'vertical',
          'ml-2': horientation === 'horizontal',
        })}
        color={textColor}
      >
        {description}
      </Paragraph>
    </div>
  )
}

CardIcon.defaultProps = {
  horientation: 'vertical',
  textColor: 'white',
}

export default CardIcon
