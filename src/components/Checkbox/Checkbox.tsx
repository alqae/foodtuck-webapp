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
    render={({ field, fieldState: { error } }) => {
      const checkedClass = field.value ? styles.checked : ''
      const errorClass = error ? styles.error : ''
      return (
        <div className={`${styles.checkbox} ${errorClass} d--f ai--c`}>
          <input
            id={name}
            type="checkbox"
            className={checkedClass}
            {...field}
          />
          <label htmlFor={name}>{label}</label>
        </div>
      )
    }}
  />
)

Checkbox.defaultProps = {
  required: false,
  name: '',
  label: '',
}

export default Checkbox
