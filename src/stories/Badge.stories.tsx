import { Badge } from '../components/badge';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

// PLAYGROUND

export const Playground = Template.bind({});
Playground.args = {
  label: 'Your Text',
  schemeColor: 'white',
};

// WHITE

export const White = Template.bind({});
White.args = {
  label: 'Your Text',
  schemeColor: 'white',
};

// PRIMARY

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your Text',
  schemeColor: 'primary',
};

// SECONDARY

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your Text',
  schemeColor: 'secondary',
};
