import React from 'react';
import { Link } from 'react-router-dom';

import { SignUpLanding } from 'components/registration';

const SignUpPage: React.FC = () => {
  const onCreateAccount = async (values: {
    email: string;
    password: string;
  }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    const response = await (
      await fetch('https://reqres.in/api/register', requestOptions)
    ).json();

    alert(JSON.stringify(response));

    return response;
  };

  return (
    <SignUpLanding
      onCreateAccount={onCreateAccount}
      loginLink={<Link to="/login">Login</Link>}
    />
  );
};

export default SignUpPage;
