import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';

import { Checkbox, ButtonSubmit, TextInput } from 'components/forms';
import styles from './LoginForm.module.scss';

interface Props {
    className?: string;
    onSubmit: (values: { email: string, password: string, rememberMe: boolean }) => any;
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string().required('Required'),
    rememberMe: Yup.boolean(),
})

const LoginForm: React.FC<Props> = (props) => {
    const { className: classNameProp, onSubmit } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                rememberMe: false,
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
                <Checkbox name="rememberMe">
                    <span className={styles['checkbox-label']}>
                        <span>
                            Remember me
                        </span>
                        <span>
                            <a href="">Forgot password?</a>
                        </span>
                    </span>
                </Checkbox>
                <ButtonSubmit>Login</ButtonSubmit>
            </Form>
        </Formik>
    );
};

export default LoginForm;
