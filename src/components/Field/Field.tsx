import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

import styles from './field.module.scss'

interface Props {
  type: React.HTMLInputTypeAttribute
  name: string
  label: string
  placeholder?: string
  rules?: Omit<RegisterOptions<any, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined
  control: Control<any, any>
  suffixIcon?: React.ReactNode
}

export default ({ type, name, label, placeholder, control, suffixIcon, rules }: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  switch (type) {
    // case value:
    //   break;
    default: // Text, number
      return (
        <Controller
          name={name}
          control={control}
          rules={{ onBlur: () => setIsFocused(false), ...rules }}
          render={({ field: { name, onBlur, onChange, ref, value }, fieldState: { error } }) => {
            const focusedClass = (isFocused || !!value.length) ? styles.floating : ''
            const errorClass = error ? styles.error : ''
            return (
              <div className={`${styles.field} d--flex ai--c ${focusedClass} ${errorClass}`}>
                {suffixIcon && <div className={`${styles.suffixIcon} d--f jc--c ai--c`}>{suffixIcon}</div>}
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
          }}
        />
      );
  }
}
