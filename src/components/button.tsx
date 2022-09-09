import '../styles/components/button.scss';

interface ButtonProps {
  label: string;
  color: 'default' | 'white';
  iconOn?: boolean;
  bootstrapIcon?: string;
  justIcon?: boolean;
  iconCircle?: boolean;
  disabled?: boolean;
}

export const Button = ({
  label,
  iconOn,
  bootstrapIcon,
  justIcon,
  iconCircle,
  color,
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
    <button className={`button ${iconStyle} ${color}`} disabled={disabled}>
      {iconOn ? <i className={bootstrapIcon}></i> : ''}
      {iconOn ? (justIcon ? '' : label) : label}
    </button>
  );
};
