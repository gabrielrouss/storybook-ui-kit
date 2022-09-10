import { Button } from '../components/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ButtonSummary',
  component: Button,
} as ComponentMeta<typeof Button>;

export const ButtonsSummary: ComponentStory<typeof Button> = () => {
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

  const WhiteBg: React.CSSProperties = {
    margin: 0,
    marginBottom: '4px',
    display: 'flex',
    flexDirection: 'column',
    width: '350px',
    justifyContent: 'space-between',
    backgroundColor: '#6e41e2',
    padding: '10px',
    border: '2px solid #6e41e2',
    borderRadius: '6px',
  };

  const WhiteH1: React.CSSProperties = {
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    margin: '0',
    marginBottom: '6px',
    marginLeft: '4px',
  };

  const DarkH1: React.CSSProperties = {
    color: '#111111',
    fontFamily: 'sans-serif',
    fontSize: '16px',
    margin: '0',
    marginBottom: '6px',
    marginLeft: '4px',
  };

  return (
    <div>
      <div style={DefaultBg}>
        <h1 style={DefaultH1}>Primary</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'primary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primary',
            }}
          />
        </div>
      </div>

      <div style={WhiteBg}>
        <h1 style={WhiteH1}>Primary White</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'primaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'primaryWhite',
            }}
          />
        </div>
      </div>

      <div style={DefaultBg}>
        <h1 style={DefaultH1}>Secondary</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'secondary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondary',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondary',
            }}
          />
        </div>
      </div>

      <div style={WhiteBg}>
        <h1 style={WhiteH1}>Secondary White</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'secondaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryWhite',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryWhite',
            }}
          />
        </div>
      </div>

      <div style={DefaultBg}>
        <h1 style={DefaultH1}>Flat</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'flat',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flat',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flat',
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flat',
            }}
          />
        </div>
      </div>

      <div style={WhiteBg}>
        <h1 style={WhiteH1}>Flat White</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'flatWhite',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flatWhite',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flatWhite',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'flatWhite',
              flatButton: true,
            }}
          />
        </div>
      </div>

      <div style={DefaultBg}>
        <h1 style={DarkH1}>Secondary Dark</h1>
        <div style={FlexDiv}>
          <Button
            {...{
              label: 'Button',
              iconOn: false,
              schemeColor: 'secondaryDark',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryDark',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryDark',
              flatButton: true,
            }}
          />
          <Button
            {...{
              label: 'Button',
              iconOn: true,
              justIcon: true,
              iconCircle: true,
              bootstrapIcon: 'bi bi-plus-lg',
              schemeColor: 'secondaryDark',
              flatButton: true,
            }}
          />
        </div>
      </div>
    </div>
  );
};
