import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { Button } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: string;
    email: string;
    onEnterNewPassword?: () => any;
    resendEmailLink?: React.ReactNode;
}

const LoginResetPassword: React.FC<Props> = (props) => {
    const {
        email,
        className: classNameProp,
        onEnterNewPassword = () => {
            return alert("On enter new password")
        },
        resendEmailLink = <a href="/resend-email">Didn't get an email?</a>
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Password sent'
            subHeader={
                <p>
                    An email has been sent to <b>{email}</b>. If this email adress is registered to Meteowrite.io,
                    you’ll recieve instructions on how to set a new password.
                </p>
            }
            footer={resendEmailLink}
            className={className}
        >
            <Button onClick={onEnterNewPassword}>
                Enter new password
            </Button>
        </ScreenLayout>
    );
};

export default LoginResetPassword;
