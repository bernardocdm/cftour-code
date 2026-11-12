import { destinationFilters } from '../../data';

interface FilterRowProps {
  value: string;
  onChange: (filter: string) => void;
}

export function FilterRow({ value, onChange }: FilterRowProps) {
  return (
    <div className="filter-row" role="group" aria-label="Filtrar destinos">
      {destinationFilters.map(f => (
        <button key={f} className={value === f ? 'filter active' : 'filter'} aria-pressed={value === f} onClick={() => onChange(f)}>
          {f}{value === f && <span>↗</span>}
        </button>
      ))}
      <span className="inspiration-note">Destinos para inspirar, viagens para personalizar.</span>
    </div>
  );
}
