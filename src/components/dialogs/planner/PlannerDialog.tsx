import { ArrowRight, ChevronLeft } from 'lucide-react';
import { periodSuggestions, placeSuggestions, plannerSubtitles, plannerTitles } from '../../../data';
import { PLANNER_LAST_STEP, type PlannerState } from '../../../hooks/usePlanner';
import { ProgressBar } from './ProgressBar';
import { StepStyle } from './StepStyle';
import { StepSummary } from './StepSummary';
import { TextStep } from './TextStep';

export function PlannerDialog({ planner }: { planner: PlannerState }) {
  const { step, style, place, period, canContinue, setStyle, setPlace, setPeriod, next, back } = planner;
  return (
    <div className="dialog-content planner-content">
      <p className="eyebrow">SEU PRÓXIMO CAPÍTULO</p>
      <ProgressBar step={step} />
      <p className="step-label">0{step + 1} / 04</p>
      <h2>{plannerTitles[step]}</h2>
      <p>{plannerSubtitles[step]}</p>
      {step === 0 && <StepStyle value={style} onChange={setStyle} />}
      {step === 1 && <TextStep id="place" label="Destino ou região" placeholder="Ex.: Itália, Nordeste, ainda não sei…" suggestions={placeSuggestions} value={place} onChange={setPlace} />}
      {step === 2 && <TextStep id="period" label="Quando você gostaria de viajar?" placeholder="Ex.: julho, próximas férias, datas flexíveis…" suggestions={periodSuggestions} value={period} onChange={setPeriod} />}
      {step === 3 && <StepSummary planner={planner} />}
      <div className="planner-navigation">
        {step > 0 ? <button onClick={back}><ChevronLeft size={17} />Voltar</button> : <span />}
        {step < PLANNER_LAST_STEP && <button className="button blue-button" disabled={!canContinue} onClick={next}>Continuar <ArrowRight size={18} /></button>}
      </div>
    </div>
  );
}
