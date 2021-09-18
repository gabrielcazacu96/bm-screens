import React from 'react';
import { Link } from 'react-router-dom';

import { Login } from 'components/registration';

const LoginPage: React.FC = () => {
  const onLogin = async (values: { email: string; password: string }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };

    const response = await (
      await fetch('https://reqres.in/api/login', requestOptions)
    ).json();

    alert(JSON.stringify(response));

    return response;
  };

  return (
    <Login
      onLogin={onLogin}
      registerLink={<Link to="/signup">Register</Link>}
      forgotPasswordLink={<Link to="/forgot-password">Forgot password?</Link>}
    />
  );
};

export default LoginPage;
