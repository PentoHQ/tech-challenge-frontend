import { Form, Field, useFormikContext } from 'formik';

import { Sessions } from 'generated/graphql';
import FormRow from 'components/FormRow';
import Button from 'components/Button';
import Error from 'components/Error';

import styles from './EditSessionBody.module.scss';
import { isBefore } from 'date-fns';
import { strToISO } from 'utils/strToISO';

export interface EditSessionBodyProps {
  /**
   * Component content
   */
  session: Sessions;
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
}

export interface EditFormData {
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

/**
 * Primary UI component for user interaction
 */
function EditSessionBody({
  session,
  className,
  ...props
}: EditSessionBodyProps) {
  const { values, errors, touched } = useFormikContext() as any;

  function validateStartDate() {
    const { startDate, startTime, endDate, endTime } = values;
    let error;
    if (
      !isBefore(
        new Date(strToISO(startDate, startTime)),
        new Date(strToISO(endDate, endTime))
      )
    ) {
      error = 'Start date should be before the end date!';
    }
    return error;
  }

  return (
    <Form {...props}>
      <FormRow alignY="center">
        <Field
          id="name"
          name="name"
          placeholder="Name"
          value={values?.name}
          className={styles.formField}
        />
      </FormRow>
      <FormRow alignY="center">
        <Field
          id="startDate"
          name="startDate"
          placeholder="Start Date"
          value={values?.startDate}
          className={styles.formField}
          validate={validateStartDate}
        />
        <Field
          id="startTime"
          name="startTime"
          placeholder="Start Time"
          value={values?.startTime}
          className={styles.formField}
          validate={validateStartDate}
        />
      </FormRow>

      <FormRow alignY="center">
        <Field
          id="endDate"
          name="endDate"
          placeholder="End Date"
          value={values?.endDate}
          className={styles.formField}
          validate={validateStartDate}
        />
        <Field
          id="endTime"
          name="endTime"
          placeholder="End Time"
          value={values?.endTime}
          className={styles.formField}
          validate={validateStartDate}
        />
      </FormRow>

      {((errors.startDate && touched.startDate) ||
        (errors.startTime && touched.startTime)) && (
        <Error
          message={errors.startDate}
          disablePadding
          size="text12Medium"
          align="left"
        />
      )}
      <FormRow alignY="center" align="right" stretchChildren={false}>
        <Button color="success" type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditSessionBody;
