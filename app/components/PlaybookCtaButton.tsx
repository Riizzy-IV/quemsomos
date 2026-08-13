"use client";

import Image from "next/image";
import { useState } from "react";
import PlaybookFormModal from "./PlaybookFormModal";

const ARROW = "/assets/arrow-cta.svg";

export default function PlaybookCtaButton({ className, label }: { className?: string; label: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={`${className ?? ""} border-none cursor-pointer`}>
        <Image src={ARROW} alt="" width={32} height={32} unoptimized />
        <span className="font-medium text-base text-[#003556]">{label}</span>
      </button>
      <PlaybookFormModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
