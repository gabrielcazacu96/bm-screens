import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Registration } from 'components';

export default {
  title: 'Screens/Registration',
  component: Registration,
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const RegistrationSimple = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };
