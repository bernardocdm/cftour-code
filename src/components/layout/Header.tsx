import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navLinks } from '../../data';
import { useScrolled } from '../../hooks/useScrolled';
import { Brand } from './Brand';

interface HeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onOpenPlanner: () => void;
}

export function Header({ menuOpen, onToggleMenu, onOpenPlanner }: HeaderProps) {
  const scrolled = useScrolled();
  return (
    <header className={scrolled || menuOpen ? 'header solid' : 'header'}>
      <Brand label="CF Tour início" />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
      </nav>
      <button className="header-cta" onClick={onOpenPlanner}>Sua próxima viagem <ArrowUpRight size={17} /></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={onToggleMenu}>
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
