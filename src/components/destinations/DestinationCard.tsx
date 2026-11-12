import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Destination } from '../../types';

interface DestinationCardProps {
  destination: Destination;
  /** Posição na lista filtrada (define o layout via classe card-N). */
  index: number;
  onSelect: (destination: Destination) => void;
}

export function DestinationCard({ destination: d, index, onSelect }: DestinationCardProps) {
  return (
    <motion.button layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className={`destination-card card-${index}`} onClick={() => onSelect(d)} aria-label={`Explorar ${d.name}`}>
      <img src={d.image} alt="" loading="lazy" />
      <span className="card-category">{d.country}</span>
      <div className="card-copy"><p>{d.mood}</p><h3>{d.name}</h3></div>
      <span className="card-arrow"><ArrowUpRight size={24} /></span>
    </motion.button>
  );
}
