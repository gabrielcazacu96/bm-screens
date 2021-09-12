import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { LoginForm } from './components';
import { ButtonLinkedIn } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: string;
    onLogin?: (values: { email: string, password: string }) => any;
    onLinkedInLogin?: () => any;
    registerLink?: React.ReactNode;
    forgotPasswordLink?: React.ReactNode;
}

const Login: React.FC<Props> = (props) => {
    const {
        className: classNameProp,
        onLogin = (values) => {
            return alert(JSON.stringify(values))
        },
        onLinkedInLogin = () => {
            return alert("On LinkedIn login")
        },
        registerLink = <a href="/register">Register</a>,
        forgotPasswordLink = <a href="/forgot-password">Forgot password?</a>,
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Login'
            footer={
                <>
                    New to meteowrite? {registerLink}
                </>
            }
            className={className}
        >
            <ButtonLinkedIn onClick={onLinkedInLogin}/>

            <span className={styles.root__or}>or</span>

            <LoginForm onSubmit={onLogin} forgotPasswordLink={forgotPasswordLink}/>
        </ScreenLayout>
    );
};

export default Login;
