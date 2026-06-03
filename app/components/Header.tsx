import Image from "next/image";
import Link from "next/link";

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
  return (
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
      <Link
        href="#contato"
        className="hidden lg:flex items-center gap-3 px-5 py-2 bg-primary rounded-xl text-white font-medium text-base no-underline"
      >
        <span className="flex items-center justify-center w-8 h-8 bg-sec-main rounded-[9px] p-2">
          <Image src={ARROW} alt="" width={15} height={15} unoptimized />
        </span>
        Entre em contato
      </Link>

      {/* Hamburger — mobile only */}
      <button className="lg:hidden flex items-center gap-4 px-[21px] py-3 bg-white/20 backdrop-blur rounded text-white text-base tracking-[0.64px] border-none cursor-pointer">
        <span>menu</span>
        <Image src={HAMBURGER} alt="" width={20} height={12} unoptimized />
      </button>
    </header>
  );
}
