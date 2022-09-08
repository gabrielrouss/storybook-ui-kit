import '../styles/components/button.scss';

interface ButtonProps {
  label: string;
  color: 'default' | 'white';
  iconOn?: boolean;
  bootstrapIcon?: string;
  justIcon?: boolean;
  iconCircle?: boolean;
}

export const Button = ({
  label,
  iconOn,
  bootstrapIcon,
  justIcon,
  iconCircle,
  color,
}: ButtonProps) => {
  const iconStyle = iconOn
    ? justIcon
      ? iconCircle
        ? 'iconOn justIcon circle'
        : 'iconOn justIcon'
      : 'iconOn'
    : '';

  return (
    <button className={`button ${iconStyle} ${color}`}>
      {iconOn ? <i className={bootstrapIcon}></i> : ''}
      {iconOn ? (justIcon ? '' : label) : label}
    </button>
  );
};
