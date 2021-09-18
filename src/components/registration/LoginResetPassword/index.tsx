import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { ResetPasswordForm } from './components';
import styles from './index.module.scss';

interface Props {
  className?: string;
  onResetPassword?: (values: { email: string }) => void;
  onLinkedInLogin?: () => void;
  loginLink?: React.ReactNode;
}

const LoginResetPassword: React.FC<Props> = (props) => {
  const {
    className: classNameProp,
    onResetPassword = (values) => {
      return alert(JSON.stringify(values));
    },
    loginLink = <a href="/login">Go back</a>,
  } = props;
  const className = cx(styles.root, classNameProp);

  return (
    <ScreenLayout
      header="Reset your password"
      subHeader="Enter your Meteowrite.io email adress so we can reset your password."
      footer={<>Remember password? {loginLink}</>}
      className={className}
    >
      <ResetPasswordForm onSubmit={onResetPassword} />
    </ScreenLayout>
  );
};

export default LoginResetPassword;
