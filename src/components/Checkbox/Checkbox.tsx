import React from 'react'
import classNames from 'classnames'
import styles from './checkbox.module.scss'
import { Control, Controller } from 'react-hook-form'

interface Props {
  name: string
  label: string | React.ReactNode
  required: boolean
  control: Control<any, any>
}

const Checkbox: React.FC<Props> = ({ name, control, label, required }) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field, fieldState: { error } }) => (
      <div className={classNames(styles.checkbox, { [styles.error]: error }, 'd--f', 'ai--c')}>
        <input
          id={name}
          type="checkbox"
          className={classNames({ [styles.checked]: field.value })}
          {...field}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )}
  />
)

Checkbox.defaultProps = {
  required: false,
  name: '',
  label: '',
}

export default Checkbox
