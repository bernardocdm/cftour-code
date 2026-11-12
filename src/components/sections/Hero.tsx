import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { heroDestinations } from '../../data';
import { reveal } from '../../lib/motion';

export function Hero({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  const [index, setIndex] = useState(0);
  const current = heroDestinations[index];
  return (
    <section className="hero" aria-label="Inspiração para sua próxima viagem">
      <AnimatePresence mode="sync">
        <motion.img key={index} className="hero-image" src={current.image} alt={current.alt} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} fetchPriority="high" />
      </AnimatePresence>
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.div {...reveal}>
          <p className="eyebrow light"><span /> O MUNDO É GRANDE. SUA VIAGEM É ÚNICA.</p>
          <h1>Vá viver<br />o seu próximo<br /><em>capítulo.</em></h1>
          <p className="hero-description">Da primeira ideia à próxima descoberta.<br />Viagens personalizadas para o seu jeito de viver.</p>
          <button className="button white" onClick={onOpenPlanner}>Vamos planejar? <ArrowUpRight size={20} /></button>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <a href="#destinos" className="scroll-hint"><span>↓</span> UM MUNDO DE POSSIBILIDADES</a>
        <div className="hero-selector">
          <MapPin size={15} />
          <span>{current.name}<small>{current.country}</small></span>
          <div className="hero-dots">
            {heroDestinations.map((d, i) => (
              <button key={d.id} aria-label={`Mostrar ${d.name}`} aria-pressed={index === i} className={index === i ? 'active' : ''} onClick={() => setIndex(i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
