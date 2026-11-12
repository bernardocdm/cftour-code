import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { navLinks } from '../../data';

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} aria-label="Navegação mobile">
          {navLinks.map(l => <a key={l.href} href={l.href} onClick={onClose}>{l.label}<ArrowUpRight /></a>)}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
