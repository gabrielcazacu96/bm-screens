import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignUpLanding } from 'components';

export default {
    title: 'Screens/SignUpLanding',
    component: SignUpLanding,
} as ComponentMeta<typeof SignUpLanding>;

const Template: ComponentStory<typeof SignUpLanding> = (args) => <SignUpLanding {...args} />;

export const SignUpLandingSimple = Template.bind({});

SignUpLandingSimple.args = {
    className: '',
    onCreateAccount: (values: any) => {
        return alert(JSON.stringify(values))
    },
    onLinkedInLogIn: () => {
        return alert("On LinkedIn login")
    }
};
