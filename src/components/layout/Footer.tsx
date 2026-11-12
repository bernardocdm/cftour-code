import { ArrowUpRight, Instagram, Mail } from 'lucide-react';
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../../data';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Brand />
        <p>O mundo tem muito para contar.<br />Vá viver a sua parte.</p>
        <div>
          <a href={`mailto:${EMAIL}`}><Mail size={18} />{EMAIL}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={18} />{INSTAGRAM_HANDLE} <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CF Tour.</span>
        <span>Feito para quem nasceu para descobrir.</span>
        <a href="#">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
