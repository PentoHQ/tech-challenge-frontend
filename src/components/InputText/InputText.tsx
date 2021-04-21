import capitalize from '../../util/capitaize'
import styles from './InputText.module.scss'

export interface InputProps {
  /**
   * How large should the input be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string
  label?: string
  value: string
  onChange: (val: string) => any
  placeholder?: string
  type?: 'text' | 'search' | 'password'
}

/**
 * Primary UI component for user interaction
 */
export const InputText = ({
  size = 'medium',
  label: text,
  type = 'text',
  className = '',
  placeholder = '',
  onChange,
  ...props
}: InputProps) => {
  const classes = [styles.wrapper, className].join(' ').trim()
  return (
    <div className={classes}>
      {text && <label className={styles.label}>{capitalize(text)}</label>}
      <input
        {...props}
        placeholder={capitalize(placeholder)}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default InputText
