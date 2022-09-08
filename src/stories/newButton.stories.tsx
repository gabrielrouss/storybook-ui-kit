import { Button } from '../components/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'newButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
