import type { InputHTMLAttributes, Ref } from 'react'
import { forwardRef } from 'react'
import capitalize from 'src/util/capitaize'
import styles from './InputText.module.scss'

export type InputProps = {
  name: string
  label: string
  required?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const InputText = (
  {
    name,
    label,
    error,
    disabled,
    required,
    type = 'text',
    placeholder = '',
    ...restProps
  }: InputProps,
  ref: Ref<HTMLInputElement>,
): JSX.Element => {
  const inputClasses = `
    ${styles.input}
  `

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {capitalize(label)}
        {required && <sup>&nbsp;*</sup>}
      </label>

      <input
        id={name}
        name={name}
        ref={ref}
        type={type}
        disabled={disabled}
        className={inputClasses}
        placeholder={capitalize(placeholder)}
        {...restProps}
      />

      {error && !disabled && (
        <span className={styles.errorMessage} data-testid={`${name}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}

export default forwardRef(InputText)
