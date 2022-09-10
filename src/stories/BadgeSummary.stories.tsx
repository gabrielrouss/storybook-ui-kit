import { Badge } from '../components/badge';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const BadgesSummary: ComponentStory<typeof Badge> = () => {
  const FlexDiv: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    width: '350px',
    justifyContent: 'space-between',
  };

  const DefaultBg: React.CSSProperties = {
    margin: 0,
    marginBottom: '4px',
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: '10px',
    border: '2px solid grey',
    borderRadius: '6px',
  };

  const DefaultH1: React.CSSProperties = {
    color: '#6e41e2',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    margin: '0',
    marginBottom: '6px',
    marginLeft: '4px',
  };

  return (
    <div>
      <div style={DefaultBg}>
        <h1 style={DefaultH1}>White</h1>
        <div style={FlexDiv}>
          <Badge
            {...{
              label: 'Your text',
              schemeColor: 'white',
            }}
          />
        </div>
      </div>

      <div style={DefaultBg}>
        <h1 style={DefaultH1}>Primary</h1>
        <div style={FlexDiv}>
          <Badge
            {...{
              label: 'Your text',
              schemeColor: 'primary',
            }}
          />
        </div>
      </div>

      <div style={DefaultBg}>
        <h1 style={DefaultH1}>Secondary</h1>
        <div style={FlexDiv}>
          <Badge
            {...{
              label: 'Your text',
              schemeColor: 'secondary',
            }}
          />
        </div>
      </div>
    </div>
  );
};
