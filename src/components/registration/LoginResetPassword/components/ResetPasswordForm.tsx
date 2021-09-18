import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';

import { ButtonSubmit, TextInput } from 'components/forms';
import styles from './ResetPasswordForm.module.scss';

interface Props {
  className?: string;
  onSubmit: (values: { email: string }) => void;
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ResetPasswordForm: React.FC<Props> = (props) => {
  const { className: classNameProp, onSubmit } = props;
  const className = cx(styles.root, classNameProp);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form className={className}>
        <TextInput
          label="Email"
          name="email"
          type="email"
          placeholder="email@example.com"
        />
        <ButtonSubmit>Sign Up</ButtonSubmit>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
