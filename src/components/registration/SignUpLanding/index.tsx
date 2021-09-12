import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { RegistrationForm } from './components';
import { ButtonLinkedIn } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: string;
    onCreateAccount?: (values: { email: string, password: string, passwordConfirmation: string, acceptedTerms: boolean }) => any;
    onLinkedInLogin?: () => any;
    termsAndConditionsLink?: React.ReactNode;
    loginLink?: React.ReactNode;
}

const SignUpLanding: React.FC<Props> = (props) => {
    const {
        className: classNameProp,
        onCreateAccount = (values) => {
            return alert(JSON.stringify(values))
        },
        onLinkedInLogin = () => {
            return alert("On LinkedIn login")
        },
        loginLink = <a href="/login">Login</a>,
        termsAndConditionsLink = <a href="/terms-and-conditions">Terms and Conditions</a>,
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Register'
            footer={
                <>
                    Already have an account? {loginLink}
                </>
            }
            className={className}
        >
            <ButtonLinkedIn onClick={onLinkedInLogin}/>

            <span className={styles.root__or}>or</span>

            <RegistrationForm onSubmit={onCreateAccount} termsAndConditionsLink={termsAndConditionsLink}/>
        </ScreenLayout>
    );
};

export default SignUpLanding;
