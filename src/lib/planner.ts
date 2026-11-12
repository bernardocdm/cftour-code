import { EMAIL } from '../data/contact';

export interface PlannerAnswers {
  style: string;
  place: string;
  period: string;
}

export const buildSummary = ({ style, place, period }: PlannerAnswers) =>
  `Olá, CF Tour! Quero planejar uma viagem.\nEstilo: ${style}\nDestino: ${place}\nPeríodo: ${period}\nPodemos conversar sobre as possibilidades?`;

export const buildMailto = (summary: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent('Vamos planejar minha viagem?')}&body=${encodeURIComponent(summary)}`;
