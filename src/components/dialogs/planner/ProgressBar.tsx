export function ProgressBar({ step, total = 4 }: { step: number; total?: number }) {
  return (
    <div className="progress" aria-label={`Etapa ${step + 1} de ${total}`}>
      {Array.from({ length: total }, (_, i) => <span key={i} className={i <= step ? 'filled' : ''} />)}
    </div>
  );
}
