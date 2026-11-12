import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { destinations } from '../../data';
import { reveal } from '../../lib/motion';
import type { Destination } from '../../types';
import { DestinationCard } from '../destinations/DestinationCard';
import { FilterRow } from '../destinations/FilterRow';

export function Destinations({ onSelect }: { onSelect: (destination: Destination) => void }) {
  const [filter, setFilter] = useState('Todos');
  const visible = destinations.filter(d => filter === 'Todos' || d.category === filter);
  return (
    <section id="destinos" className="section destinations">
      <motion.div {...reveal} className="section-top">
        <div>
          <p className="eyebrow">ESCOLHA O SENTIMENTO. DESCUBRA O DESTINO.</p>
          <h2>Para onde a sua<br />vontade te leva<span className="blue">?</span></h2>
        </div>
        <p>Um mergulho no azul. Uma cultura nova.<br />Ou só uma pausa bem longe da rotina.<br /><strong>Encontre a sua próxima inspiração.</strong></p>
      </motion.div>
      <FilterRow value={filter} onChange={setFilter} />
      <motion.div layout className="destination-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((d, i) => <DestinationCard key={d.id} destination={d} index={i} onSelect={onSelect} />)}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
