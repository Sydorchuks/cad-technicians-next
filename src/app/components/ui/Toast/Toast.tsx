"use client";

import Image from "next/image";
import { createPortal } from "react-dom";

type Props = {
  message: string;
  open: boolean;
  onClose: () => void;
};

export default function Toast({ message, open, onClose }: Props) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-bg-modal p-4" onClick={onClose}>
      <div
        className="relative flex min-h-44.5 w-full max-w-146 items-center justify-center
          rounded-lg bg-white px-8 text-center text-md font-bold md:text-[26px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose} className="absolute right-4 top-4">
          <Image src="close.svg" alt="Close" width={15} height={16}/>
        </button>
        {message}
      </div>
    </div>,
    document.body
  );
}