import './Badge.scss';
import { BadgeProps } from './Badge.types';
import './Badge.scss';

export default function Badge({ color, text }: BadgeProps) {
  return (
    <div className={`badge badge--${color}`}>
      <span className="caption">{text}</span>
    </div>
  );
}
