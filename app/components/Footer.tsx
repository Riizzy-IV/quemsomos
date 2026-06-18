import Image from "next/image";
import Link from "next/link";
import ContactButton from "./ContactButton";

const ISOLATION  = "/assets/isolation.svg";
const INSTAGRAM  = "/assets/instagram.svg";
const LINKEDIN   = "/assets/linkedin.svg";
const WHATSAPP   = "/assets/whatsapp.svg";
const MAP_PIN    = "/assets/map-pin.svg";

const navLinks = ["Home", "Quem somos", "Serviços", "Cases", "Clientes", "Contato"];

export default function Footer() {
  return (
    <footer id="contato" className="relative z-10 bg-bg-dark px-6 lg:px-[120px] pt-10 lg:pt-[60px] pb-12 lg:pb-20 mt-12 lg:mt-20">


      {/* ── Bottom ── */}
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-20 lg:items-start gap-10">

        {/* Left */}
        <div className="flex flex-col gap-8 lg:gap-[52px]">
          <div className="flex flex-col gap-4 lg:gap-7">
            <div className="flex items-center gap-2">
              <Image src={ISOLATION} alt="" width={16} height={16} unoptimized />
              <span className="font-body text-base lg:text-xl leading-relaxed text-sec-lighter">
                Nossa missão é clara: substituir o improviso por inteligência aplicada
              </span>
            </div>
            <h2 className="font-bold text-[clamp(56px,8vw,120px)] leading-none text-off-white uppercase">
              vamos<br />conversar?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 lg:gap-6 items-center">
            <Link href="https://www.instagram.com/balzani.company/" target="_blank" className="flex items-center gap-2 px-3 py-2 lg:px-[10px] lg:py-[10px] border border-primary rounded-[16px] text-white font-body text-sm lg:text-base no-underline">
              <Image src={INSTAGRAM} alt="Instagram" width={20} height={20} unoptimized />
              @balzani.company
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 px-3 py-2 lg:px-[10px] lg:py-[10px] border border-primary rounded-[16px] text-white font-body text-sm lg:text-base no-underline">
              <Image src={LINKEDIN} alt="LinkedIn" width={20} height={20} unoptimized />
              company/balzani
            </Link>
            <ContactButton className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-[10px] bg-primary border border-primary rounded-[16px] text-white font-body text-sm lg:text-base">
              <Image src={WHATSAPP} alt="WhatsApp" width={20} height={20} unoptimized />
              entre em contato
            </ContactButton>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <Image src={MAP_PIN} alt="" width={20} height={20} unoptimized className="shrink-0" />
            <span className="text-sm lg:text-base leading-none">
              Avenida Álvaro Ramos, 896 - Belém, São Paulo - SP, 03330-002
            </span>
          </div>
        </div>

        {/* Divider — desktop only */}
        <div className="hidden lg:block self-stretch border-l border-white/15" />

        {/* Nav */}
        <nav className="flex flex-col border-t lg:border-t-0 border-white/10 pt-8 lg:pt-5">
          {navLinks.map((item, i) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`flex items-center gap-2.5 py-3 lg:py-3.5 text-lg lg:text-2xl font-medium text-white no-underline ${
                i < navLinks.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-primary shrink-0" />
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
