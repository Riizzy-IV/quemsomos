"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactButton from "./ContactButton";
import PlaybookCtaButton from "./PlaybookCtaButton";

const LOGO      = "/assets/logo.svg";
const HAMBURGER = "/assets/hamburger.svg";
const ARROW     = "/assets/arrow-cta.svg";

const NAV_LINKS = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Serviços",   href: "https://balzani.com.br/#servicos" },
  { label: "Cases",      href: "https://balzani.com.br/#cases" },
  { label: "Clientes",   href: "https://balzani.com.br/#clientes" },
  { label: "Contato",    href: "#contato" },
];

export default function Header({
  showNav = true,
  ctaVariant = "contact",
}: {
  showNav?: boolean;
  ctaVariant?: "contact" | "playbook";
}) {
  const [open, setOpen] = useState(false);

  const desktopCtaClass = "hidden lg:flex items-center gap-3 px-5 py-2 bg-primary rounded-xl text-white font-medium text-base";
  const mobileCtaClass = "flex items-center justify-center gap-3 px-5 py-4 bg-primary rounded-xl text-white font-medium text-base w-full";

  return (
    <>
      <header className="relative z-50 flex items-center justify-between px-6 lg:px-[120px] py-6 lg:py-8">
        {/* Logo */}
        <Link href="/">
          <Image src={LOGO} alt="Balzani" width={140} height={27} unoptimized />
        </Link>

        {/* Nav — desktop only */}
        {showNav && (
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
        )}

        {/* CTA — desktop only */}
        {ctaVariant === "playbook" ? (
          <PlaybookCtaButton className={desktopCtaClass} label="Entre em contato" />
        ) : (
          <ContactButton className={desktopCtaClass}>
            <Image src={ARROW} alt="" width={32} height={32} unoptimized />
            Entre em contato
          </ContactButton>
        )}

        {/* Hamburger — mobile only */}
        {showNav && (
          <button
            className="lg:hidden flex items-center gap-4 px-[21px] py-3 bg-white/20 backdrop-blur rounded text-white text-base tracking-[0.64px] border-none cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <span>menu</span>
            <Image src={HAMBURGER} alt="" width={20} height={12} unoptimized />
          </button>
        )}
      </header>

      {/* Mobile menu drawer */}
      {showNav && open && (
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
          {showNav && (
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
          )}

          {/* CTA */}
          <div className="px-6 mt-8">
            {ctaVariant === "playbook" ? (
              <PlaybookCtaButton className={mobileCtaClass} label="Entre em contato" />
            ) : (
              <ContactButton className={mobileCtaClass}>
                <Image src={ARROW} alt="" width={32} height={32} unoptimized />
                Entre em contato
              </ContactButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}
