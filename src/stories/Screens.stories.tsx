import React from 'react';
import { ComponentStory } from '@storybook/react';

import {
    LoginPasswordSend,
    LoginResetPassword,
    LoginVerificationLink,
    SignUpBasicInfo,
    SignUpLanding
} from 'components';

export default {
    title: 'Screens',
};

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

LoginPasswordSendSimple.args = {
    className: '',
    email: 'user@example.com',
    onEnterNewPassword: () => {
        return alert("On enter new password")
    },
};

LoginResetPasswordSimple.args = {
    className: '',
    onResetPassword: () => {
        return alert("On reset password")
    },
};

LoginVerificationLinkSimple.args = {
    className: '',
    onLogIn: () => {
        return alert("On login")
    },
};

SignUpBasicInfoSimple.args = {
    className: '',
    onSignUp: (values: any) => {
        return alert(JSON.stringify(values))
    },
};

SignUpLandingSimple.args = {
    className: '',
    onCreateAccount: (values: any) => {
        return alert(JSON.stringify(values))
    },
    onLinkedInLogIn: () => {
        return alert("On LinkedIn login")
    }
};

