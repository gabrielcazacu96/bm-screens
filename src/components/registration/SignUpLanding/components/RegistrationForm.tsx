import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';

import { Checkbox, ButtonSubmit, TextInput } from 'components/forms';
import styles from './RegistrationForm.module.scss';

interface Props {
    className?: string;
    onSubmit: (values: { email: string, password: string, passwordConfirmation: string, acceptedTerms: boolean }) => any;
    termsAndConditionsLink?: React.ReactNode;
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([ Yup.ref('password'), null ], 'Passwords must match'),
    acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([ true ], "You must accept the terms and conditions."),
})

const RegistrationForm: React.FC<Props> = (props) => {
    const { className: classNameProp, termsAndConditionsLink, onSubmit } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                passwordConfirmation: "",
                acceptedTerms: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await Promise.resolve(onSubmit(values))
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
                <TextInput
                    label="Password"
                    name="password"
                    type="password"
                />
                <TextInput
                    label="Confirm Password"
                    name="passwordConfirmation"
                    type="password"
                />
                <Checkbox name="acceptedTerms">
                    <span>
                        I agree to the Meteowrite {termsAndConditionsLink}
                    </span>
                </Checkbox>
                <ButtonSubmit>Create Account</ButtonSubmit>
            </Form>
        </Formik>
    );
};

export default RegistrationForm;
