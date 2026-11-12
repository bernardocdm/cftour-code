import { Plane } from 'lucide-react';

export function Brand({ label }: { label?: string }) {
  return (
    <a href="#" aria-label={label} className="brand">
      CF<span>TOUR<Plane size={15} /></span>
    </a>
  );
}
