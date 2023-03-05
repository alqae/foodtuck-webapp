import React from 'react'
import classNames from 'classnames'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

import styles from './field.module.scss'

interface Props {
  type: React.HTMLInputTypeAttribute
  name: string
  label: string
  placeholder?: string
  min?: number
  max?: number
  rules?: Omit<RegisterOptions<any, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined
  control: Control<any, any>
  suffixIcon?: React.ReactNode
}

const Field: React.FC<Props> = ({
  type,
  name,
  label,
  placeholder,
  control,
  suffixIcon,
  rules,
  min,
  max,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  switch (type) {
    default: // Text, number
      return (
        <Controller
          name={name}
          control={control}
          rules={{ onBlur: () => setIsFocused(false), ...rules }}
          render={({ field: { name, onBlur, onChange, ref, value }, fieldState: { error } }) => (
            <div
              className={classNames(
                styles.field,
                'd--flex',
                'ai--c',
                {
                  [styles.floating]: isFocused || !!value.length,
                },
                {
                  [styles.error]: error,
                }
              )}>

              {suffixIcon && (
                <div className={classNames(styles.suffixIcon, 'd--f', 'jc--c', 'ai--c')}>
                  {suffixIcon}
                </div>
              )}

              <label htmlFor={name}>{label}</label>
              <input
                onFocus={() => setIsFocused(true)}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                id={name}
                name={name}
                ref={ref}
                placeholder={placeholder}
              />

              {error && <AiOutlineExclamationCircle size="24px" />}
            </div>
          )
          }
        />
      );
  }
}

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  label: '',
  name: '',
  rules: {},
  suffixIcon: null,
}

export default Field
