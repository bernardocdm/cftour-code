import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { processSteps } from '../../data';
import { reveal } from '../../lib/motion';

export function Process({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return (
    <section id="como-funciona" className="process section">
      <motion.div {...reveal} className="section-top">
        <div>
          <p className="eyebrow">DO “E SE…” AO “VAMOS?”</p>
          <h2>Uma boa viagem começa<br />com uma boa conversa.</h2>
        </div>
        <button className="button blue-button" onClick={onOpenPlanner}>Começar meu plano <ArrowUpRight size={18} /></button>
      </motion.div>
      <div className="steps">
        {processSteps.map(s => (
          <motion.article {...reveal} key={s.n}>
            <span className="step-number">{s.n}</span>
            <ArrowUpRight className="step-arrow" size={22} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
