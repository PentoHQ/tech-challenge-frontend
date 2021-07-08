import { Form, useFormikContext } from 'formik';
import { isBefore } from 'date-fns';

import { Sessions } from 'generated/graphql';
import FormRow from 'components/FormRow';
import Button from 'components/Button';
import Error from 'components/Error';
import FormField from 'components/FormField';
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
  const { values, errors, touched, isSubmitting } = useFormikContext() as any;

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
        <FormField
          id="name"
          name="name"
          placeholder="Name"
          label="Name:"
          value={values?.name}
        />
      </FormRow>
      <FormRow alignY="center">
        <FormField
          id="startDate"
          name="startDate"
          placeholder="Start Date"
          label="Start Date:"
          value={values?.startDate}
          validate={validateStartDate}
        />
        <FormField
          id="startTime"
          name="startTime"
          placeholder="Start Time"
          label="Start Time:"
          value={values?.startTime}
          validate={validateStartDate}
        />
      </FormRow>

      <FormRow alignY="center">
        <FormField
          id="endDate"
          name="endDate"
          placeholder="End Date"
          label="End Date:"
          value={values?.endDate}
          validate={validateStartDate}
        />
        <FormField
          id="endTime"
          name="endTime"
          placeholder="End Time"
          label="End Time:"
          value={values?.endTime}
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
        <Button
          color="success"
          type="submit"
          disabled={isSubmitting || errors?.startDate || errors?.endDate}
        >
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default EditSessionBody;
