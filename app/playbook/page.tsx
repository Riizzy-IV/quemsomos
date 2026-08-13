import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import PlaybookForm from "@/app/components/PlaybookForm";
import PlaybookCtaButton from "@/app/components/PlaybookCtaButton";

export const metadata: Metadata = {
  title: "Balzani Company",
  description:
    "Baixe gratuitamente o Playbook Estratégico da Balzani e conheça os principais pontos que precisam estar estruturados antes de um lançamento imobiliário.",
};

const LOGO = "/assets/logo.svg";
const INSTAGRAM = "/assets/instagram.svg";
const LINKEDIN = "/assets/linkedin.svg";
const HERO_VECTOR = "/assets/pb-hero-vector.svg";
const BOOK_VECTOR = "/assets/pb-book-vector.svg";
const BOOK_SHADOW = "/assets/pb-book-shadow.webp";
const BOOK_COVER = "/assets/pb-book-cover.webp";

const QUESTIONS = [
  "Quanto investir em Marketing?",
  "Como estruturar a equipe comercial?",
  "Vale a pena ter uma House?",
  "Como trabalhar os leads gerados?",
  "Como escolher e engajar as imobiliárias da cidade?",
  "Como fazer os corretores priorizarem o seu produto?",
  "Como estruturar Meeting, comissão e premiações?",
  "Onde posicionar o stand de vendas?",
];

const FEATURES = [
  {
    icon: "/assets/pb-icon-marketing-conceito.svg",
    title: "Marketing de Conceito",
    desc: "Posicionamento, identidade visual, comunicação e materiais.",
  },
  {
    icon: "/assets/pb-icon-marketing-performance.svg",
    title: "Marketing de Performance",
    desc: "Tráfego pago, criativos, geração de demanda, CRM e indicadores.",
  },
  {
    icon: "/assets/pb-icon-estrutura-comercial.svg",
    title: "Estrutura Comercial",
    desc: "House, SDR, corretores, imobiliárias estratégicas e fluxo de atendimento.",
  },
  {
    icon: "/assets/pb-icon-forca-vendas.svg",
    title: "Força de Vendas",
    desc: "Meeting, treinamentos, relacionamento, comissionamento, bonificação e gamificação.",
  },
  {
    icon: "/assets/pb-icon-operacao-lancamento.svg",
    title: "Operação de Lançamento",
    desc: "Stand, cronograma, responsabilidades, indicadores e acompanhamento.",
  },
];

export default function Playbook() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <div
        className="absolute inset-0 h-[2400px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #003556, #00243a)" }}
      />

      <Header showNav={false} ctaVariant="playbook" />

      {/* ── Hero ── */}
      <section className="relative z-10 px-site pt-6 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_505px] gap-10 lg:gap-8 items-start">
          <div className="flex flex-col gap-6">
            <h1 className="font-normal text-[clamp(28px,4vw,56px)] leading-[1.1] uppercase text-white">
              Incorporador, se você tem um lançamento previsto, este playbook pode evitar{" "}
              <strong className="font-extrabold text-primary">erros que custam caro.</strong>
            </h1>
            <div className="w-24 h-2 bg-primary rounded" />
            <p className="font-medium text-base lg:text-lg leading-relaxed text-white max-w-[607px]">
              Baixe gratuitamente o Playbook Estratégico da Balzani e conheça os principais pontos
              que precisam estar estruturados em Marketing, Comercial e força de vendas antes de
              colocar um empreendimento no mercado.
            </p>
            <p className="font-medium text-base lg:text-lg leading-relaxed text-white max-w-[607px]">
              Um material prático desenvolvido a partir da experiência da Balzani na estruturação
              de lançamentos imobiliários.
            </p>
          </div>

          <div className="relative w-full lg:w-[505px]">
            <div className="hidden lg:block absolute pointer-events-none" style={{ top: -100, right: -20, width: 420, height: 420, zIndex: 0 }}>
              <Image src={HERO_VECTOR} alt="" fill unoptimized style={{ objectFit: "contain" }} />
            </div>
            <div
              id="playbook-form"
              className="relative rounded-lg p-6 lg:p-9 flex flex-col gap-8"
              style={{ background: "#00243a", borderTop: "8px solid #ff611b", boxShadow: "0px 40px 30px rgba(0,0,0,0.25)" }}
            >
              <h2 className="font-bold text-2xl lg:text-[32px] leading-[1.1] uppercase text-white">
                Preencha o formulário
                <br />e baixe o playbook
              </h2>
              <PlaybookForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Um lançamento não começa... ── */}
      <section className="relative z-10 mt-16 lg:mt-24 pt-14 lg:pt-20 pb-16 lg:pb-24" style={{ background: "#00233a" }}>
        <div className="px-site grid grid-cols-1 lg:grid-cols-[1fr_607px] gap-8 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 lg:gap-12">
            <h2 className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.1] uppercase text-white">
              Um lançamento não começa no dia da abertura das vendas
            </h2>
            <div className="w-24 h-2 bg-primary rounded" />
          </div>
          <div className="flex flex-col gap-4 text-base lg:text-lg leading-[1.8] text-white">
            <p>Um bom produto, sozinho, não garante um bom lançamento.</p>
            <p>
              Antes de abrir as vendas, existem decisões que podem impactar diretamente a
              velocidade de comercialização do empreendimento:
            </p>
          </div>
        </div>

        <div className="px-site flex flex-col gap-4 mt-10 lg:mt-14 lg:flex-row lg:flex-wrap">
          {QUESTIONS.map((q) => (
            <div
              key={q}
              className="flex items-center justify-center px-4 lg:px-10 py-5 rounded-2xl border text-center whitespace-nowrap"
              style={{ borderColor: "#2f79a8" }}
            >
              <p
                className="font-bold text-primary tracking-[-0.48px]"
                style={{ fontSize: "clamp(12px, 3.6vw, 16px)" }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site" />

      {/* ── Book mockup + heading ── */}
      <section className="relative z-10 px-site pt-16 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 lg:gap-12 order-2 lg:order-1">
          <h2 className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.3] text-white">
            O Playbook foi criado para ajudar você a responder essas perguntas antes que elas se
            tornem problemas.
          </h2>
          <div className="w-24 h-2 bg-primary rounded" />
        </div>

        <div className="relative order-1 lg:order-2 w-full h-[300px] lg:h-[500px]">
          <div className="absolute pointer-events-none" style={{ top: "-15%", right: "-10%", width: "80%", height: "130%" }}>
            <Image src={BOOK_VECTOR} alt="" fill unoptimized style={{ objectFit: "contain" }} />
          </div>
          <div className="absolute inset-0" style={{ mixBlendMode: "multiply" }}>
            <Image src={BOOK_SHADOW} alt="" fill unoptimized style={{ objectFit: "contain" }} />
          </div>
          <div className="absolute" style={{ top: "6%", left: "8%", width: "84%", height: "88%" }}>
            <Image src={BOOK_COVER} alt="Playbook Estratégico da Balzani" fill unoptimized style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      {/* ── O que você vai encontrar ── */}
      <section className="relative z-10 px-site pt-24 lg:pt-32 pb-16 lg:pb-20 flex flex-col items-center gap-14 lg:gap-[89px]">
        <div className="flex flex-col items-center gap-9 max-w-[888px]">
          <div className="flex flex-col items-center gap-3 text-center text-white">
            <p className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.1] uppercase">
              O que você vai encontrar
            </p>
            <p className="font-normal text-lg lg:text-2xl leading-[1.8]">
              Uma visão completa da estratégia por trás de um lançamento imobiliário.
            </p>
          </div>
          <div className="border border-white rounded-2xl px-6 py-4 lg:h-[70px] flex items-center justify-center">
            <p className="font-normal text-base lg:text-lg leading-[1.8] text-white text-center">
              No Playbook Estratégico da Fórmula Vértice, você vai entender como pensamos:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 w-full lg:flex lg:flex-wrap lg:justify-center lg:gap-[68px]">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`flex flex-col items-center gap-[34px] text-center lg:w-[253px] ${
                i === FEATURES.length - 1 && FEATURES.length % 2 === 1 ? "col-span-2" : ""
              }`}
            >
              <div className="relative w-[70px] h-[70px] lg:w-[98px] lg:h-[98px]">
                <Image src={f.icon} alt="" fill unoptimized style={{ objectFit: "contain" }} />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold text-lg leading-[1.8] text-primary">{f.title}</p>
                <p className="font-normal text-base leading-[1.2] text-white">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 py-16 lg:py-24 px-site flex flex-col items-center text-center gap-10 lg:gap-[51px]" style={{ background: "#00233a" }}>
        <p className="font-bold text-[clamp(24px,3vw,40px)] leading-[1.1] text-white max-w-[900px]">
          Se você vai lançar nos próximos meses, não deixe para pensar na estratégia quando as
          vendas já estiverem abertas.
        </p>
        <p className="font-normal text-lg lg:text-2xl leading-[1.3] text-white max-w-[900px]">
          Receba gratuitamente o{" "}
          <strong className="font-bold text-primary">Playbook Estratégico da Balzani</strong> e
          analise o quanto o seu próximo lançamento está realmente preparado.
        </p>
        <PlaybookCtaButton
          className="flex items-center justify-center gap-[11px] h-12 px-6 rounded-xl bg-primary"
          label="Baixe o playbook gratuitamente"
        />
      </section>

      <footer className="relative z-10 px-site py-8 flex items-center justify-between flex-wrap gap-6" style={{ background: "#00243a" }}>
        <Link href="/">
          <Image src={LOGO} alt="Balzani" width={140} height={27} unoptimized />
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-sm text-white">Siga a Balzani nas redes sociais</span>
          <div className="flex items-center gap-[22px]">
            <Link href="https://www.instagram.com/balzani.company/" target="_blank">
              <Image src={INSTAGRAM} alt="Instagram" width={24} height={24} unoptimized />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Image src={LINKEDIN} alt="LinkedIn" width={24} height={24} unoptimized />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
