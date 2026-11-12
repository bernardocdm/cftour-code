import { useEffect, useRef } from 'react';

/** Abre/fecha um <dialog> nativo, trava o scroll do body e devolve o foco ao fechar. */
export function useModalDialog(open: boolean) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      previousFocus.current = document.activeElement as HTMLElement;
      modal?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      modal?.close();
      document.body.style.overflow = '';
      previousFocus.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return dialogRef;
}
