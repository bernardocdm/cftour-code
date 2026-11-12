import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import type { Destination } from './types';
import { usePlanner } from './hooks/usePlanner';
import { SkipLink } from './components/layout/SkipLink';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ServiceStrip } from './components/sections/ServiceStrip';
import { Destinations } from './components/sections/Destinations';
import { Essence } from './components/sections/Essence';
import { Process } from './components/sections/Process';
import { PlannerBanner } from './components/sections/PlannerBanner';
import { Faq } from './components/sections/Faq';
import { Modal } from './components/dialogs/Modal';
import { DestinationDetail } from './components/dialogs/DestinationDetail';
import { PlannerDialog } from './components/dialogs/planner/PlannerDialog';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Destination | null>(null);
  const planner = usePlanner();

  const close = () => { planner.close(); setSelected(null); };
  const openPlanner = (destination = '') => {
    setSelected(null);
    planner.open(destination);
    setMenuOpen(false);
  };
  const startPlanner = () => openPlanner();

  return (
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(o => !o)} onOpenPlanner={startPlanner} />
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="conteudo">
        <Hero onOpenPlanner={startPlanner} />
        <ServiceStrip />
        <Destinations onSelect={setSelected} />
        <Essence onOpenPlanner={startPlanner} />
        <Process onOpenPlanner={startPlanner} />
        <PlannerBanner onOpenPlanner={startPlanner} />
        <Faq />
      </main>
      <Footer />
      <Modal open={planner.isOpen || !!selected} className={selected ? 'dialog destination-dialog' : 'dialog'} onClose={close}>
        {selected ? <DestinationDetail destination={selected} onOpenPlanner={openPlanner} /> : planner.isOpen ? <PlannerDialog planner={planner} /> : null}
      </Modal>
    </MotionConfig>
  );
}
