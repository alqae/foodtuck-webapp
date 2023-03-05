import React from 'react'
import classNames from 'classnames'
import styles from './search-bar.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

import { ButtonIcon } from '../ButtonIcon'
import { Control, Controller } from 'react-hook-form'

interface Props {
  name: string
  control: Control<any, any>
}

const SearchBar: React.FC<Props> = ({ name, control, ...props }) => (
  <Controller
    name={name}
    control={control}
    rules={{ required: false }}
    defaultValue={''}
    render={({ field }) => (
      <div className={classNames(styles.searchBar, 'd--f', 'ai--c')}>
        <input type="search" placeholder="Search Product" {...field} />
        <ButtonIcon type="submit" icon={AiOutlineSearch} size={20} />
      </div>
      // <div
      //   className={classNames(
      //     styles.checkbox,
      //     {
      //       [styles.error]: error,
      //       [className ?? '']: className,
      //     },
      //     'd--f',
      //     'ai--c',
      //   )}
      // >
      //   <input
      //     id={name}
      //     type="checkbox"
      //     className={classNames({ [styles.checked]: field.value })}
      //     {...field}
      //   />
      //   <label htmlFor={name}>{label}</label>
      // </div>
    )}
  />
)

SearchBar.defaultProps = {
  name: 'search',
}

export default SearchBar
