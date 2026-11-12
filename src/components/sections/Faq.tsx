import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { faqs, INSTAGRAM_URL } from '../../data';
import { reveal } from '../../lib/motion';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq section">
      <motion.div {...reveal}>
        <p className="eyebrow">ANTES DE FAZER AS MALAS</p>
        <h2>Uma dúvida?<br /><em>Vamos lá.</em></h2>
        <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Converse pelo Instagram <ArrowUpRight size={18} /></a>
      </motion.div>
      <div>
        {faqs.map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <h3>
              <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                {q}{open === i ? <Minus size={19} /> : <Plus size={19} />}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div id={`faq-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="faq-answer"><p>{a}</p></motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
