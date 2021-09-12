import React from 'react';
import { ComponentStory } from '@storybook/react';

import {
    Login,
    LoginPasswordSend,
    LoginResetPassword,
    LoginVerificationLink,
    SignUpBasicInfo,
    SignUpLanding
} from 'components/registration';

export default {
    title: 'Registration',
};

const LoginTemplate: ComponentStory<typeof Login> = (args) => <Login {...args} />;
export const LoginSimple = LoginTemplate.bind({});

const LoginPasswordSendTemplate: ComponentStory<typeof LoginPasswordSend> = (args) => <LoginPasswordSend {...args} />;
export const LoginPasswordSendSimple = LoginPasswordSendTemplate.bind({});

const LoginResetPasswordTemplate: ComponentStory<typeof LoginResetPassword> = (args) => <LoginResetPassword {...args} />;
export const LoginResetPasswordSimple = LoginResetPasswordTemplate.bind({});

const LoginVerificationLinkTemplate: ComponentStory<typeof LoginVerificationLink> = (args) => <LoginVerificationLink {...args} />;
export const LoginVerificationLinkSimple = LoginVerificationLinkTemplate.bind({});

const SignUpBasicInfoTemplate: ComponentStory<typeof SignUpBasicInfo> = (args) => <SignUpBasicInfo {...args} />;
export const SignUpBasicInfoSimple = SignUpBasicInfoTemplate.bind({});

const SignUpLandingTemplate: ComponentStory<typeof SignUpLanding> = (args) => <SignUpLanding {...args} />;
export const SignUpLandingSimple = SignUpLandingTemplate.bind({});

LoginSimple.args = {
    onLogin: async (values: any) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await (await fetch('https://reqres.in/api/login', requestOptions)).json()

        return alert(`On Login: ${JSON.stringify(values)} | response: ${JSON.stringify(response)}`)
    },
    onLinkedInLogin: () => {
        return alert("On Linked In login")
    }
};

LoginPasswordSendSimple.args = {
    email: 'user@example.com',
    onEnterNewPassword: () => {
        return alert("On Enter New Password")
    },
};

LoginResetPasswordSimple.args = {
    onResetPassword: () => {
        return alert("On Reset Password")
    },
};

LoginVerificationLinkSimple.args = {
    onLogin: () => {
        return alert("On Login")
    },
};

SignUpBasicInfoSimple.args = {
    onSignUp: (values: any) => {
        return alert(`On Sign Up: ${JSON.stringify(values)}`)
    },
};

SignUpLandingSimple.args = {
    onCreateAccount: (values: any) => {
        return alert(`On Create Account: ${JSON.stringify(values)}`)
    },
    onLinkedInLogin: () => {
        return alert("On LinkedIn Login")
    }
};

