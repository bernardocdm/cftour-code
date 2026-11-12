import { ArrowUpRight, Compass, Plane } from 'lucide-react';

export function PlannerBanner({ onOpenPlanner }: { onOpenPlanner: () => void }) {
  return (
    <section className="planner-banner section">
      <div>
        <p className="eyebrow light">TEM UMA VIAGEM AÍ DENTRO?</p>
        <h2>Vamos dar o<br />primeiro <em>passo.</em></h2>
        <p>Algumas escolhas. Um começo de roteiro.<br />O resto a gente conversa.</p>
        <button className="button white" onClick={onOpenPlanner}>Descobrir minha próxima viagem <ArrowUpRight size={19} /></button>
      </div>
      <div className="ticket" aria-hidden="true">
        <div className="ticket-top"><Plane size={30} /><span>CARTÃO DE EMBARQUE<br /><strong>PRÓXIMO CAPÍTULO</strong></span><Compass size={25} /></div>
        <div className="ticket-route"><span>VOC<small>VOCÊ ESTÁ AQUI</small></span><span className="flight-line">····· ✈ ·····</span><span>MUN<small>O MUNDO TE ESPERA</small></span></div>
        <div className="ticket-bottom"><span>DESTINO<strong>Novas histórias</strong></span><span>CLASSE<strong>Do seu jeito</strong></span><span>PORTÃO<strong>Agora</strong></span></div>
        <div className="barcode" />
      </div>
    </section>
  );
}
