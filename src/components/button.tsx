import '../styles/components/buttons/button.scss';
import '../styles/components/buttons/buttonSchemes.scss';

interface ButtonProps {
  label: string;
  schemeColor:
    | 'primary'
    | 'primaryWhite'
    | 'secondary'
    | 'secondaryWhite'
    | 'secondaryDark'
    | 'flat'
    | 'flatWhite';
  flatButton?: boolean;
  iconOn?: boolean;
  bootstrapIcon?: string;
  justIcon?: boolean;
  iconCircle?: boolean;
  disabled?: boolean;
}

export const Button = ({
  label,
  schemeColor,
  flatButton,
  iconOn,
  bootstrapIcon,
  justIcon,
  iconCircle,
  disabled,
}: ButtonProps) => {
  const iconStyle = iconOn
    ? justIcon
      ? iconCircle
        ? 'iconOn justIcon circle'
        : 'iconOn justIcon'
      : 'iconOn'
    : '';

  return (
    <button
      id='button'
      className={`${iconStyle} ${schemeColor} ${flatButton ? 'flatButton' : ''}`}
      disabled={disabled}
    >
      {iconOn ? <i className={bootstrapIcon}></i> : ''}
      {iconOn ? (justIcon ? '' : label) : label}
    </button>
  );
};
