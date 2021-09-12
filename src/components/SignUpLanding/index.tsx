import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { RegistrationForm } from './components';
import { ButtonLinkedIn } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: String;
    onCreateAccount?: (values: { email: string, password: string, passwordConfirmation: string, acceptedTerms: boolean }) => any;
    onLinkedInLogIn?: () => any;
}

const SignUpLanding: React.FC<Props> = (props) => {
    const {
        className: classNameProp,
        onCreateAccount = (values) => {
            return alert(JSON.stringify(values))
        },
        onLinkedInLogIn = () => {
            return alert("On LinkedIn login")
        }
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Register'
            className={className}
        >
            <ButtonLinkedIn onClick={onLinkedInLogIn}/>

            <span className={styles.root__or}>or</span>

            <RegistrationForm onSubmit={onCreateAccount}/>

            <span className={styles.root__footer}>
                Already have an account? <a href="">Login</a>
            </span>
        </ScreenLayout>
    );
};

export default SignUpLanding;