import { Check, Copy, Mail } from 'lucide-react';
import type { PlannerState } from '../../../hooks/usePlanner';

export function StepSummary({ planner }: { planner: PlannerState }) {
  const { style, place, period, mail, copied, copySummary } = planner;
  return (
    <>
      <dl className="summary">
        {[['Seu estilo', style], ['Destino', place], ['Período', period]].map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <a className="button blue-button full" href={mail}>Conversar por e-mail <Mail size={18} /></a>
      <button className="copy-button" onClick={copySummary}>
        {copied ? <Check size={17} /> : <Copy size={17} />} {copied ? 'Resumo copiado!' : 'Copiar meu resumo'}
      </button>
      <p className="privacy-note" aria-live="polite">Seu plano fica apenas nesta sessão. O e-mail só é enviado por você, no seu aplicativo.</p>
    </>
  );
}
