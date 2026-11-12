interface TextStepProps {
  id: string;
  label: string;
  placeholder: string;
  suggestions: string[];
  value: string;
  onChange: (value: string) => void;
}

/** Etapa com campo de texto + sugestões (usada para destino e período). */
export function TextStep({ id, label, placeholder, suggestions, value, onChange }: TextStepProps) {
  return (
    <>
      <label className="input-label" htmlFor={id}>{label}</label>
      <input id={id} value={value} onChange={e => onChange(e.target.value)} maxLength={100} placeholder={placeholder} />
      <div className="suggestions">
        {suggestions.map(s => <button key={s} onClick={() => onChange(s)}>{s}</button>)}
      </div>
    </>
  );
}
