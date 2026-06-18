"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactButton from "./ContactButton";

const LOGO      = "/assets/logo.svg";
const HAMBURGER = "/assets/hamburger.svg";
const ARROW     = "/assets/arrow.svg";

const NAV_LINKS = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Serviços",   href: "/servicos" },
  { label: "Cases",      href: "/cases" },
  { label: "Clientes",   href: "/clientes" },
  { label: "Contato",    href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 lg:px-[120px] py-6 lg:py-8">
        {/* Logo */}
        <Link href="/">
          <Image src={LOGO} alt="Balzani" width={140} height={27} unoptimized />
        </Link>

        {/* Nav — desktop only */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-white text-base font-medium no-underline hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA — desktop only */}
        <ContactButton className="hidden lg:flex items-center gap-3 px-5 py-2 bg-primary rounded-xl text-white font-medium text-base">
          <span className="flex items-center justify-center w-8 h-8 bg-sec-main rounded-[9px] p-2">
            <Image src={ARROW} alt="" width={15} height={15} unoptimized />
          </span>
          Entre em contato
        </ContactButton>

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden flex items-center gap-4 px-[21px] py-3 bg-white/20 backdrop-blur rounded text-white text-base tracking-[0.64px] border-none cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span>menu</span>
          <Image src={HAMBURGER} alt="" width={20} height={12} unoptimized />
        </button>
      </header>

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 flex flex-col" style={{ background: "#00243a" }}>
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between px-6 py-6">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src={LOGO} alt="Balzani" width={140} height={27} unoptimized />
            </Link>
            <button
              className="flex items-center gap-4 px-[21px] py-3 bg-white/20 backdrop-blur rounded text-white text-base tracking-[0.64px] border-none cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              <span>fechar</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 mt-4 gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-medium no-underline py-4 border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 mt-8">
            <ContactButton className="flex items-center justify-center gap-3 px-5 py-4 bg-primary rounded-xl text-white font-medium text-base w-full">
              <span className="flex items-center justify-center w-8 h-8 bg-sec-main rounded-[9px] p-2">
                <Image src={ARROW} alt="" width={15} height={15} unoptimized />
              </span>
              Entre em contato
            </ContactButton>
          </div>
        </div>
      )}
    </>
  );
}
