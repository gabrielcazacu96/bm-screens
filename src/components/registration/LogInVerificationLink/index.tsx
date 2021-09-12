import React from 'react';
import cx from 'classnames';
import emailVerificationSentSvg from 'assets/email-verification-sent.svg';

import { ScreenLayout } from 'components/common';
import { Button } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: string;
    onLogin?: () => any;
}

const LoginVerificationLink: React.FC<Props> = (props) => {
    const {
        className: classNameProp,
        onLogin = () => {
            return alert("On Login")
        },
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            headerImageSrc={emailVerificationSentSvg}
            header='A verification link has been sent to your email account'
            subHeader='Please click on the link that has just been sent to your email account to verify your email and continue the registration process.'
            footer={
                <>
                    <a href=""> Didn't get an email?</a>
                </>
            }
            className={className}
        >

            <Button onClick={onLogin}>Log In</Button>
        </ScreenLayout>
    );
};

export default LoginVerificationLink;
