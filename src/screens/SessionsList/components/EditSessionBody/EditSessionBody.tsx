import { Form, Field, useFormikContext } from 'formik';

import { Sessions } from 'generated/graphql';
import FormRow from 'components/FormRow';
import Button from 'components/Button';

import styles from './EditSessionBody.module.scss';

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
  const { values } = useFormikContext() as any;

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
        />
        <Field
          id="startTime"
          name="startTime"
          placeholder="Start Time"
          value={values?.startTime}
          className={styles.formField}
        />
      </FormRow>
      <FormRow alignY="center">
        <Field
          id="endDate"
          name="endDate"
          placeholder="End Date"
          value={values?.endDate}
          className={styles.formField}
        />
        <Field
          id="endTime"
          name="endTime"
          placeholder="End Time"
          value={values?.endTime}
          className={styles.formField}
        />
      </FormRow>
      <FormRow alignY="center" align="right" stretchChildren={false}>
        <Button color="success" type="submit">
          Submit
        </Button>
      </FormRow>
    </Form>
    // </Formik>
    // <Form
    //   initialValues={{ startDate: '', startTime: '', endDate: '', endTime: '' }}
    //   onSubmit={(values) => console.log('values', values)}
    // >
    //   <FormField></FormField>
    //   <button type="submit"></button>
    // </Form>
    // <form className={className} {...props}>
    //   <FormRow alignY="center">
    //     <InputText
    //       label="Name:"
    //       value={updatedSession.name}
    //       onChange={(name) =>
    //         setUpdatedSession((session: Sessions) => ({ ...session, name }))
    //       }
    //     />
    //   </FormRow>
    //   <FormRow alignY="center">
    //     <InputText
    //       label="Start Date:"
    //       value={start.time}
    //       onChange={
    //         (startTime) => {
    //           const [hour, min, sec] = startTime.split(':');
    //           console.log('startTime', hour, min, sec);
    //           setStart({ ...start, time: startTime });
    //         }
    //         // setUpdatedSession((session: Sessions) => ({
    //         //   ...session,
    //         //   startDate,
    //         // }))
    //       }
    //     />
    //     <InputText
    //       label="Start Time:"
    //       value={start.time}
    //       onChange={
    //         (startTime) => {
    //           const [hour, min, sec] = startTime.split(':');
    //           console.log('startTime', hour, min, sec);
    //           setStart({ ...start, time: startTime });
    //         }
    //         // setUpdatedSession((session: Sessions) => ({
    //         //   ...session,
    //         //   startDate,
    //         // }))
    //       }
    //     />
    //     {/* <InputText
    //       label="Start Date:"
    //       value={updatedSession.startDate}
    //       onChange={(startDate) =>
    //         setUpdatedSession((session: Sessions) => ({
    //           ...session,
    //           startDate,
    //         }))
    //       }
    //     /> */}
    //     {/* <InputText
    //       label="Start Time:"
    //       value={format(new Date(updatedSession.startDate), 'hh:mm:ss')}
    //       onChange={
    //         (startDate) => console.log({ startDate })
    //         // setUpdatedSession((session: Sessions) => ({
    //         //   ...session,
    //         //   startDate,
    //         // }))
    //       }
    //     /> */}
    //   </FormRow>
    //   <FormRow alignY="center">
    //     <InputText
    //       label="End Date:"
    //       value={updatedSession.endDate}
    //       onChange={(endDate) =>
    //         setUpdatedSession((session: Sessions) => ({ ...session, endDate }))
    //       }
    //     />
    //   </FormRow>
    // </form>
  );
}

export default EditSessionBody;
