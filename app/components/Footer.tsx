import Image from "next/image";
import Link from "next/link";

const ISOLATION  = "https://www.figma.com/api/mcp/asset/df3c5b35-db8b-4fce-9786-745505d720be";
const INSTAGRAM  = "https://www.figma.com/api/mcp/asset/14dd38d2-2d58-41c0-9ac7-07ea944db752";
const LINKEDIN   = "https://www.figma.com/api/mcp/asset/ce1a6d6f-522e-4e47-92ec-e4bcdee096d3";
const WHATSAPP   = "https://www.figma.com/api/mcp/asset/820ad65a-bd70-48da-8b28-3043086dd834";
const MAP_PIN    = "https://www.figma.com/api/mcp/asset/6389f02a-2383-4516-b86d-4156acabfb64";
const BELL       = "https://www.figma.com/api/mcp/asset/403d834f-ddcc-453c-9dcf-4ce9e666c6c7";
const SUBMIT_BTN = "https://www.figma.com/api/mcp/asset/41f03170-ed46-47f7-9e3a-029eeebb6e9a";

const navLinks = ["Home", "Quem somos", "Serviços", "Cases", "Clientes", "Contato"];

export default function Footer() {
  return (
    <footer id="contato" className="relative z-10 bg-bg-dark px-6 lg:px-[120px] pt-10 lg:pt-[60px] pb-12 lg:pb-20 mt-12 lg:mt-20">

      {/* ── Newsletter bar ── */}
      <div
        className="relative flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-[46px] rounded-[24px] px-6 lg:px-9 py-6 lg:py-[34px] mb-12 lg:mb-20 overflow-hidden"
        style={{
          background: "linear-gradient(to right, #b83800 31%, #ee5e1f)",
          boxShadow: "0 20px 44px rgba(0,0,0,.25)",
        }}
      >
        <div className="flex items-center gap-2 shrink-0">
          <Image src={BELL} alt="" width={32} height={32} unoptimized />
          <span className="font-bold text-lg lg:text-2xl leading-tight">
            Fique por dentro das notícias
          </span>
        </div>

        <input
          type="text"
          placeholder="nome"
          className="w-full lg:flex-1 h-14 lg:h-[83px] bg-primary rounded-xl px-5 lg:px-8 text-lg lg:text-2xl text-primary-light placeholder:text-primary-light outline-none border-none"
        />
        <input
          type="email"
          placeholder="e-mail"
          className="w-full lg:flex-1 h-14 lg:h-[83px] bg-primary rounded-xl px-5 lg:px-8 text-lg lg:text-2xl text-primary-light placeholder:text-primary-light outline-none border-none"
        />
        <button className="flex items-center justify-center gap-3 w-full lg:w-[229px] h-14 lg:h-[83px] bg-sec-main rounded-xl px-5 lg:px-[21px] py-[10px] border-none cursor-pointer">
          <Image src={SUBMIT_BTN} alt="" width={36} height={36} unoptimized />
          <span className="font-medium text-lg lg:text-[23px] text-sec-lighter">enviar</span>
        </button>
      </div>

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
            <Link href="https://instagram.com" target="_blank" className="flex items-center gap-2 px-3 py-2 lg:px-[10px] lg:py-[10px] border border-primary rounded-[16px] text-white font-body text-sm lg:text-base no-underline">
              <Image src={INSTAGRAM} alt="Instagram" width={20} height={20} unoptimized />
              @balzani.company
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-2 px-3 py-2 lg:px-[10px] lg:py-[10px] border border-primary rounded-[16px] text-white font-body text-sm lg:text-base no-underline">
              <Image src={LINKEDIN} alt="LinkedIn" width={20} height={20} unoptimized />
              company/balzani
            </Link>
            <Link href="https://wa.me" target="_blank" className="flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-[10px] bg-primary border border-primary rounded-[16px] text-white font-body text-sm lg:text-base no-underline">
              <Image src={WHATSAPP} alt="WhatsApp" width={20} height={20} unoptimized />
              entre em contato
            </Link>
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
