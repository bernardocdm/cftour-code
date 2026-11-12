import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { essenceImage } from '../../data';
import { reveal } from '../../lib/motion';

export function Essence({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return (
    <section id="essencia" className="essence section">
      <motion.div {...reveal} className="essence-art">
        <img src={essenceImage.src} alt={essenceImage.alt} loading="lazy" />
        <div className="postcard"><Compass size={34} /><span>Menos do mesmo.<br /><em>Mais do seu jeito.</em></span></div>
        <span className="vertical-note">COLECIONE MOMENTOS, NÃO SÓ DESTINOS.</span>
      </motion.div>
      <motion.div {...reveal} className="essence-copy">
        <p className="eyebrow">O JEITO CF TOUR DE VIAJAR</p>
        <h2>O roteiro começa<br />com <em>você.</em></h2>
        <p>Tem quem viaje para descobrir. Tem quem viaje para descansar. E tem quem ainda esteja procurando um motivo para fazer as malas.</p>
        <p>Seja qual for o seu, a gente começa ouvindo. Seus planos, suas preferências e aquele lugar que não sai da sua cabeça.</p>
        <div className="essence-line"><Sparkles size={22} /><span>Pacotes personalizados.<br /><strong>Possibilidades que combinam com você.</strong></span></div>
        <button className="text-link" onClick={onOpenPlanner}>Conte a sua ideia <ArrowUpRight size={20} /></button>
      </motion.div>
    </section>
  );
}
