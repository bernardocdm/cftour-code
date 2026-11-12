import { services } from '../../data';

export function ServiceStrip() {
  return (
    <section className="service-strip" aria-label="Nossos serviços">
      {services.map(({ Icon, label }) => <div key={label}><Icon size={21} /><span>{label}</span></div>)}
    </section>
  );
}
