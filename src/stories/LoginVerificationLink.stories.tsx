import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginVerificationLink } from 'components';

export default {
    title: 'Screens/LoginVerificationLink',
    component: LoginVerificationLink,
} as ComponentMeta<typeof LoginVerificationLink>;

const Template: ComponentStory<typeof LoginVerificationLink> = (args) => <LoginVerificationLink {...args} />;

export const LoginVerificationLinkSimple = Template.bind({});

LoginVerificationLinkSimple.args = {
    className: '',
    onLogIn: () => {
        return alert("On login")
    },
};
