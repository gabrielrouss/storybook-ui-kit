export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Default',
    values: [
      { name: 'Default', value: '#FFFFFF' },
      { name: 'if white', value: '#6e41e2' },
    ],
  },
};
