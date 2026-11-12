import { useState } from 'react';
import { buildMailto, buildSummary } from '../lib/planner';

export const PLANNER_LAST_STEP = 3;

export function usePlanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [style, setStyle] = useState('');
  const [place, setPlace] = useState('');
  const [period, setPeriod] = useState('');
  const [copied, setCopied] = useState(false);

  const open = (destination = '') => {
    setPlace(destination);
    setStep(0);
    setCopied(false);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  const summary = buildSummary({ style, place, period });
  const mail = buildMailto(summary);
  const canContinue = step === 0 ? !!style : step === 1 ? !!place.trim() : !!period.trim();

  const copySummary = async () => {
    try { await navigator.clipboard.writeText(summary); setCopied(true); }
    catch { setCopied(false); }
  };

  return { isOpen, step, style, place, period, copied, summary, mail, canContinue, open, close, next, back, setStyle, setPlace, setPeriod, copySummary };
}

export type PlannerState = ReturnType<typeof usePlanner>;
