import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';

import { ButtonSubmit, TextInput } from 'components/forms';
import styles from './BasicInfoForm.module.scss';

interface Props {
  className?: string;
  onSubmit: (values: {
    firstName: string;
    lastName: string;
    company: string;
    companyRole: string;
  }) => void;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  company: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  companyRole: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
});

const BasicInfoForm: React.FC<Props> = (props) => {
  const { className: classNameProp, onSubmit } = props;
  const className = cx(styles.root, classNameProp);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        company: '',
        companyRole: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form className={className}>
        <TextInput label="First Name" name="firstName" type="text" />
        <TextInput label="Last Name" name="lastName" type="text" />
        <TextInput
          label="Company"
          name="company"
          type="text"
          placeholder="Where are you working right now?"
        />
        <TextInput
          label="Company Role"
          name="companyRole"
          type="text"
          placeholder="What is your role in the company"
        />
        <ButtonSubmit>Sign Up</ButtonSubmit>
      </Form>
    </Formik>
  );
};

export default BasicInfoForm;
