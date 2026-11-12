import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useModalDialog } from '../../hooks/useModalDialog';

interface ModalProps {
  open: boolean;
  className?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, className = 'dialog', onClose, children }: ModalProps) {
  const ref = useModalDialog(open);
  return (
    <dialog ref={ref} className={className} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <button className="dialog-close" aria-label="Fechar" onClick={onClose}><X size={22} /></button>
      {children}
    </dialog>
  );
}
