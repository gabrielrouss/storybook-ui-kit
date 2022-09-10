import '../styles/components/badges/badge.scss';

interface BadgeProps {
  label: string;
  schemeColor: 'white' | 'primary' | 'secondary';
}

export const Badge = ({ label, schemeColor }: BadgeProps) => {
  return (
    <div id='badge' className={`${schemeColor}`}>
      <p>{label}</p>
    </div>
  );
};
