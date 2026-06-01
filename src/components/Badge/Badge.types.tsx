type BadgeColor = 'primary' | 'secondary';

export interface BadgeProps {
  color: BadgeColor;
  text: string | number;
}
