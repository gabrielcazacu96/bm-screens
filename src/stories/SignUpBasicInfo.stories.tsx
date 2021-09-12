import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignUpBasicInfo } from 'components';

export default {
    title: 'Screens/SignUpBasicInfo',
    component: SignUpBasicInfo,
} as ComponentMeta<typeof SignUpBasicInfo>;

const Template: ComponentStory<typeof SignUpBasicInfo> = (args) => <SignUpBasicInfo {...args} />;

export const SignUpBasicInfoSimple = Template.bind({});

SignUpBasicInfoSimple.args = {
    className: '',
    onSignUp: (values: any) => {
        return alert(JSON.stringify(values))
    },
};
