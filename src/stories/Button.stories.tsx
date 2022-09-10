import { Button } from '../components/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// PLAYGROUND

export const Playground = Template.bind({});
Playground.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'primary',
};

// PRIMARY

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'primary',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'primary',
};

export const PrimaryJustIcon = Template.bind({});
PrimaryJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'primary',
};

export const PrimaryJustIconCircle = Template.bind({});
PrimaryJustIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'primary',
};

// PRIMARY WHITE

export const PrimaryWhite = Template.bind({});
PrimaryWhite.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'primaryWhite',
};
PrimaryWhite.parameters = {
  backgrounds: { default: 'if white' },
};

export const PrimaryWhiteWithIcon = Template.bind({});
PrimaryWhiteWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'primaryWhite',
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
  schemeColor: 'primaryWhite',
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
  schemeColor: 'primaryWhite',
};
PrimaryWhiteIconCircle.parameters = {
  backgrounds: { default: 'if white' },
};

// SECONDARY

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondary',
};

export const SecondaryJustIcon = Template.bind({});
SecondaryJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondary',
};

export const SecondaryIconCircle = Template.bind({});
SecondaryIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondary',
};

// SECONDARY WHITE

export const SecondaryWhite = Template.bind({});
SecondaryWhite.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'secondaryWhite',
};
SecondaryWhite.parameters = {
  backgrounds: { default: 'if white' },
};

export const SecondaryWhiteWithIcon = Template.bind({});
SecondaryWhiteWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryWhite',
};
SecondaryWhiteWithIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const SecondaryWhiteJustIcon = Template.bind({});
SecondaryWhiteJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryWhite',
};
SecondaryWhiteJustIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const SecondaryWhiteIconCircle = Template.bind({});
SecondaryWhiteIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryWhite',
};
SecondaryWhiteIconCircle.parameters = {
  backgrounds: { default: 'if white' },
};

// SECONDARY DARK

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'secondaryDark',
};

export const SecondaryDarkWithIcon = Template.bind({});
SecondaryDarkWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryDark',
};

export const SecondaryDarkJustIcon = Template.bind({});
SecondaryDarkJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryDark',
};

export const SecondaryDarkIconCircle = Template.bind({});
SecondaryDarkIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'secondaryDark',
};

// FLAT

export const Flat = Template.bind({});
Flat.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'flat',
  flatButton: true,
};

export const FlatWithIcon = Template.bind({});
FlatWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flat',
  flatButton: true,
};

export const FlatJustIcon = Template.bind({});
FlatJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flat',
  flatButton: true,
};

export const FlatIconCircle = Template.bind({});
FlatIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flat',
  flatButton: true,
};

// FLAT WHITE

export const FlatWhite = Template.bind({});
FlatWhite.args = {
  label: 'Button',
  iconOn: false,
  schemeColor: 'flatWhite',
  flatButton: true,
};
FlatWhite.parameters = {
  backgrounds: { default: 'if white' },
};

export const FlatWhiteWithIcon = Template.bind({});
FlatWhiteWithIcon.args = {
  label: 'Button',
  iconOn: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flatWhite',
  flatButton: true,
};
FlatWhiteWithIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const FlatWhiteJustIcon = Template.bind({});
FlatWhiteJustIcon.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flatWhite',
  flatButton: true,
};
FlatWhiteJustIcon.parameters = {
  backgrounds: { default: 'if white' },
};

export const FlatWhiteIconCircle = Template.bind({});
FlatWhiteIconCircle.args = {
  label: 'Button',
  iconOn: true,
  justIcon: true,
  iconCircle: true,
  bootstrapIcon: 'bi bi-plus-lg',
  schemeColor: 'flatWhite',
  flatButton: true,
};
FlatWhiteIconCircle.parameters = {
  backgrounds: { default: 'if white' },
};
