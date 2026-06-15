"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  message: string;
  open: boolean;
  onClose: () => void;
};

export default function Toast({message, open, onClose,}: Props) {
  useEffect(() => {
    if (!open) return;

    const timeout = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
 }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed bottom-6 right-6 z-9999 rounded-lg bg-primary px-6 py-4 text-white shadow-xl">
      {message}
    </div>,
    document.body
  );
}