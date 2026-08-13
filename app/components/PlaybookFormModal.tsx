"use client";

import { createPortal } from "react-dom";
import PlaybookForm from "./PlaybookForm";

export default function PlaybookFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 px-4 py-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[480px] rounded-lg p-6 lg:p-9 flex flex-col gap-8"
        style={{ background: "#00243a", borderTop: "8px solid #ff611b", boxShadow: "0px 40px 30px rgba(0,0,0,0.25)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-5 top-5 text-white text-lg leading-none border-none bg-transparent cursor-pointer"
        >
          ✕
        </button>

        <h2 className="font-bold text-2xl lg:text-[32px] leading-[1.1] uppercase text-white pr-6">
          Preencha o formulário
          <br />e baixe o playbook
        </h2>
        <PlaybookForm />
      </div>
    </div>,
    document.body
  );
}
