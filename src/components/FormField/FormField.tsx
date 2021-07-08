import { Field } from 'formik';
import React from 'react';

import styles from './FormField.module.scss';

export interface FormFieldProps {
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  id: string;
  name: string;
  value?: any;
  placeholder?: string;
  label?: string;
  validate?: Function;
}

/**
 * Primary UI component for user interaction
 */
function FormField({
  className,
  id,
  name,
  value = null,
  placeholder = '',
  label = '',
  validate,
}: FormFieldProps) {
  const classes = [styles.formWrapper, className].join(' ').trim();
  return (
    <div className={classes}>
      <label htmlFor={label}>{label}</label>
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={styles.formField}
        validate={validate}
      />
    </div>
  );
}

export default FormField;
