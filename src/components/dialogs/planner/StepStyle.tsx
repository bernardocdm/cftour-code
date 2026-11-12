import { ArrowUpRight, Check } from 'lucide-react';
import { plannerStyles } from '../../../data';

interface StepStyleProps {
  value: string;
  onChange: (style: string) => void;
}

export function StepStyle({ value, onChange }: StepStyleProps) {
  return (
    <div className="choices">
      {plannerStyles.map(s => (
        <button key={s} aria-pressed={value === s} className={value === s ? 'chosen' : ''} onClick={() => onChange(s)}>
          {s}{value === s ? <Check size={17} /> : <ArrowUpRight size={16} />}
        </button>
      ))}
    </div>
  );
}
