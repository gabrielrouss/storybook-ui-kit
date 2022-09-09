import { Button } from '../components/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  iconOn: false,
  color: 'default',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'default',
};

export const PrimaryJustIcon = Template.bind({});
PrimaryJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'default',
};

export const PrimaryJustIconCircle = Template.bind({});
PrimaryJustIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'default',
};

export const PrimaryWhite = Template.bind({});
PrimaryWhite.args = {
  label: 'Button',
  iconOn: false,
  color: 'white',
};
PrimaryWhite.parameters = {
  backgrounds: { default: 'if white' },
};

export const PrimaryWhiteWithIcon = Template.bind({});
PrimaryWhiteWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'white',
};
PrimaryWhiteWithIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const PrimaryWhiteJustIcon = Template.bind({});
PrimaryWhiteJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'white',
};
PrimaryWhiteJustIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const PrimaryWhiteIconCircle = Template.bind({});
PrimaryWhiteIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  color: 'white',
};
PrimaryWhiteIconCircle.parameters = {
  backgrounds: { default: 'if white' },
};
