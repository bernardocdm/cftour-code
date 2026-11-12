import { ArrowUpRight } from 'lucide-react';
import type { Destination } from '../../types';

interface DestinationDetailProps {
  destination: Destination;
  onOpenPlanner: (destinationName: string) => void;
}

export function DestinationDetail({ destination: d, onOpenPlanner }: DestinationDetailProps) {
  return (
    <>
      <img className="detail-image" src={d.image} alt={`Paisagem de ${d.name}`} />
      <div className="dialog-content">
        <p className="eyebrow">{d.country} · INSPIRAÇÃO DE VIAGEM</p>
        <h2>{d.name}</h2>
        <p>{d.description}</p>
        <div className="tags">{d.tags.map(t => <span key={t}>{t}</span>)}</div>
        <p className="detail-note">Roteiros, datas, valores e disponibilidade são definidos com a agência.</p>
        <button className="button blue-button" onClick={() => onOpenPlanner(d.name)}>Quero uma viagem assim <ArrowUpRight size={18} /></button>
      </div>
    </>
  );
}
