import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SectionBadge from "@/app/components/SectionBadge";
import BlueBar from "@/app/components/BlueBar";

const FV_LOGO = "/assets/fv-logo.svg";
const FV_HERO = "/assets/fv-hero-real.jpg";
const FV_COMM = "/assets/fv-commercial.svg";
const FV_CHECK = "/assets/fv-check.svg";
const FV_BTN = "/assets/fv-cta-btn.svg";
const PURPOSE_ICON = "/assets/purpose-icon.svg";

const PILLARS = [
  { n: "1", label: "Estratégia" },
  { n: "2", label: "Marketing" },
  { n: "3", label: "Comercial" },
  { n: "4", label: "Dados" },
];

const MARKETING_TAGS = [
  "Vídeo Conceito",
  "Landing Page",
  "Mídia Online e Offline",
  "Criativos de alta conversão",
  "Autoridade digital",
];

const STATS = [
  { val: "+70", sub: "Lançamentos imobiliários" },
  { val: "Bilhões", sub: "Em VGV" },
  { val: "Milhões", sub: "Lançamentos feitos" },
];

export default function FormulaVertice() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-[1680px] lg:h-[1500px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #00243a 15%, #021c2d 55%)" }}
      />

      <Header />

      {/* Breadcrumb */}
      <div className="relative z-10 flex items-center gap-2 px-site mt-2 text-xs">
        <span className="opacity-20">HOME</span>
        <span className="w-2 h-px bg-white/50" />
        <span>FÓRMULA VÉRTICE</span>
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 pt-6 lg:pt-10">
        {/* Badge above image */}
        <div className="px-site mb-6">
          <SectionBadge>FÓRMULA VÉRTICE</SectionBadge>
        </div>

        {/* Mobile: image on top */}
        <div className="lg:hidden relative w-full h-[260px]">
          <Image src={FV_HERO} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #00243a)" }} />
        </div>

        {/* Desktop: image left, content right — absolute layout */}
        <div className="relative lg:min-h-[620px]">

          {/* Left: hero image (desktop only) */}
          <div className="hidden lg:block absolute left-0 top-0 h-full" style={{ width: "56%" }}>
            <Image src={FV_HERO} alt="" fill sizes="56vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 55%, #00243a)" }} />
          </div>

          {/* Right: text + cards */}
          <div className="relative lg:absolute lg:left-[52%] lg:top-0 lg:h-full flex flex-col justify-center px-site lg:px-0 lg:pr-[120px] py-10 lg:py-0 gap-6">
            <div className="flex flex-col gap-6 lg:max-w-[480px]">
              <BlueBar />
              <p className="font-normal text-base lg:text-xl leading-relaxed max-w-[420px]">
                Todo incorporador entra em um lançamento com a{" "}
                <strong className="font-bold text-primary">mesma expectativa:</strong>
              </p>

              {/* Glassmorphism panel */}
              <div
                className="rounded-3xl p-6 lg:p-8 flex flex-col gap-6 lg:-ml-[120px]"
                style={{
                  maxWidth: 480,
                  borderRadius: 24,
                  background: "rgba(0,53,86,0.60)",
                  boxShadow: "0 20px 60px 0 rgba(0,0,0,0.25)",
                  backdropFilter: "blur(6.55px)",
                  WebkitBackdropFilter: "blur(6.55px)",
                }}
              >
                {[
                  { label: "Vender rápido", lgMl: "lg:ml-0" },
                  { label: "Ganhar escala", lgMl: "lg:ml-8" },
                  { label: "Gerar caixa", lgMl: "lg:ml-16" },
                ].map(({ label, lgMl }) => (
                  <div
                    key={label}
                    className={`flex items-center justify-center gap-4 px-6 py-4 lg:py-5 rounded-xl ${lgMl}`}
                    style={{ background: "#afd2df", width: 330 }}
                  >
                    <Image src={FV_CHECK} alt="" width={24} height={24} unoptimized />
                    <span className="font-bold text-base lg:text-xl uppercase text-[#003556] tracking-[-0.5px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reality check ── */}
      <section className="relative z-10 px-site mt-20 lg:mt-[120px] flex flex-col items-center text-center gap-8">
        <p className="font-bold text-[clamp(28px,3.5vw,48px)] text-primary leading-[1.1]">
          Mas a realidade do mercado é outra.
        </p>
        <p className="font-normal text-base lg:text-lg leading-relaxed max-w-[680px] text-white/80">
          Porque no mercado imobiliário, não basta ter um bom produto.
          <br />
          Sem estratégia, até grandes empreendimentos fracassam.
        </p>
        <div className="flex items-center gap-4 w-full max-w-[800px]">
          <div className="flex-1 h-px bg-white/15" />
          <Image src={PURPOSE_ICON} alt="" width={16} height={16} unoptimized />
          <div className="flex-1 h-px bg-white/15" />
        </div>
        <p className="font-normal text-[clamp(20px,2.5vw,32px)] text-white leading-relaxed">
          Foi para resolver isso que nós da Balzani criamos…
        </p>

        {/* Fórmula Vértice logo + orange glow */}
        <div className="relative w-full max-w-[345px] h-[145px]">
          {/* Orange glow mobile */}
          <div className="lg:hidden absolute pointer-events-none" style={{ top: "200%", left: "50%", transform: "translate(-50%, -50%)", width: "280%", height: "280%", zIndex: 0 }}>
            <Image src="/assets/fv-bg.svg" alt="" fill unoptimized style={{ objectFit: "contain" }} />
          </div>
          {/* Orange glow desktop */}
          <div className="hidden lg:block absolute pointer-events-none" style={{ top: "160%", left: "50%", transform: "translate(-50%, -50%)", width: "600%", height: "600%", zIndex: 0 }}>
            <Image src="/assets/fv-bg.svg" alt="" fill unoptimized style={{ objectFit: "contain" }} />
          </div>
          <Image src={FV_LOGO} alt="Fórmula Vértice" fill unoptimized style={{ objectFit: "contain", zIndex: 1 }} />
        </div>
      </section>

      {/* ── Sobre a Fórmula ── */}
      <section className="relative z-10 px-site pt-60 lg:pt-80 pb-16 lg:pb-20 flex flex-col items-center text-center gap-8">
        <div className="flex justify-center w-full">
          <SectionBadge variant="outline">SOBRE A FÓRMULA</SectionBadge>
        </div>
        <h2 className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.3] tracking-[-1.2px] max-w-[700px]">
          Uma metodologia validada para transformar lançamentos imobiliários em operações de alta performance.
        </h2>
        <p className="font-normal text-base lg:text-lg leading-relaxed max-w-[554px] text-white/80">
          Enquanto o mercado entrega serviços isolados… A Balzani construiu{" "}
          <strong className="font-bold text-white">o maior hub de soluções para o mercado imobiliário do Brasil.</strong>
        </p>
      </section>

      {/* ── 4 Pillars ── */}
      <div className="relative z-10 px-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="relative flex flex-col justify-between p-5 lg:p-8 rounded-3xl"
              style={{ border: "1px solid rgba(47,121,168,0.4)", minHeight: 160 }}
            >
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg text-white font-bold text-sm"
                style={{ background: "#ff611b" }}
              >
                {p.n}
              </div>
              <p className="font-bold text-[clamp(24px,2vw,40px)] text-primary tracking-[-1.2px] leading-[1.3]">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── VENDER EMPREENDIMENTOS ── */}
      <section className="relative z-10 px-site mt-16 lg:mt-20 flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-[140px]">
        <div className="flex items-center gap-10">
          <div className="w-[3px] h-24 lg:h-32 rounded-full bg-primary shrink-0" />
          <p className="font-normal text-[clamp(20px,2vw,32px)] leading-[1.8] text-white">
            Tudo conectado.
            <br />
            Tudo integrado.
            <br />
            Tudo pensado para uma única coisa:
          </p>
        </div>
        <p className="font-extrabold text-[clamp(40px,5.5vw,80px)] text-primary uppercase leading-[1.1] tracking-[-2px]">
          Vender
          <br />
          Empreendimentos
        </p>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site mt-16 lg:mt-20" />

      {/* ── Como Funciona ── */}
      <section className="relative z-10 px-site pt-16 lg:pt-20 flex flex-col gap-10 lg:gap-14">
        <SectionBadge variant="outline">COMO FUNCIONA</SectionBadge>

        {/* Step 1 — Estratégia */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-[168px] items-start">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-[clamp(24px,2.5vw,40px)] leading-[1.3] tracking-[-1.2px] text-white">
              O primeiro passo para um lançamento de sucesso é a definição de uma{" "}
              <span className="text-primary">estratégia eficiente.</span>
            </p>
          </div>
          <ul className="flex flex-col gap-2 list-disc list-outside pl-5 text-base lg:text-[16px] leading-[1.6] text-white/90">
            <li>Construímos toda a estratégia comercial e de vendas do lançamento.</li>
            <li>Definimos o posicionamento.</li>
            <li>Estruturamos o cronograma.</li>
            <li>Planejamos cada etapa da campanha.</li>
            <li>E desenhamos um evento de lançamento pensado para gerar desejo, percepção de valor e resultado.</li>
          </ul>
        </div>

        {/* Step 2 — Marketing */}
        <div className="flex flex-col gap-8 lg:gap-10">
          <p className="font-bold text-[clamp(24px,2.5vw,40px)] leading-[1.3] tracking-[-1.2px] text-white max-w-[900px] text-center mx-auto">
            Depois, o <span className="text-primary">marketing</span> entra para construir desejo. Unimos estratégia, criatividade e performance para transformar empreendimentos em cases de sucesso.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {MARKETING_TAGS.map((tag) => (
              <div
                key={tag}
                className="flex items-center justify-center px-6 lg:px-10 py-4 lg:py-8 rounded-3xl font-bold text-base lg:text-2xl text-white text-center tracking-[-0.5px]"
                style={{ border: "1px solid rgba(47,121,168,0.4)" }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-white/10" />

        {/* Step 3 — Comercial */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[168px] items-center px-8 lg:px-14 py-14 rounded-3xl"
          style={{ background: "#021c2d" }}
        >
          <p className="font-bold text-[clamp(24px,2.5vw,40px)] leading-[1.3] tracking-[-1.2px] text-white">
            Mas o lançamento não se vende sozinho. Por isso estruturamos toda a{" "}
            <span className="text-primary">operação comercial.</span>
          </p>
          <ul className="flex flex-col gap-3 list-disc list-outside pl-5 text-base leading-[1.6] text-white/90">
            <li>Implementamos processos.</li>
            <li>Estruturamos o funil de vendas.</li>
            <li>Configuramos CRM.</li>
            <li>Realizamos treinamentos semanais com a equipe comercial.</li>
            <li>Executamos cliente oculto.</li>
            <li>Acompanhamos indicadores e performance em tempo real.</li>
          </ul>
        </div>

        {/* Step 4 — Dados */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-[168px] items-start pt-10 lg:pt-16">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[clamp(24px,2.5vw,40px)] leading-[1.3] tracking-[-1.2px] text-white">
              E por trás de toda grande operação,{" "}
              <span className="text-primary">existem dados!</span>
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center justify-center px-5 py-4 rounded-3xl text-white font-normal text-base lg:text-xl text-center tracking-[-0.5px]"
              style={{ border: "1px solid rgba(47,121,168,0.4)" }}
            >
              Porque campanhas de lançamento sem dados… não são nada.
            </div>
            <p className="text-base leading-[1.6] text-white/90">
              Analisamos métricas, cruzamos informações entre o marketing e vendas e tomamos decisões baseadas em performance real.{" "}
              <strong className="text-primary">Sem achismo. Sem improviso.</strong>
            </p>
          </div>
        </div>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site mt-16 lg:mt-20" />

      {/* ── Stats ── */}
      <section className="relative z-10 px-site py-16 lg:py-20 flex flex-col gap-6 items-center">
        <p className="font-bold text-[clamp(24px,2.5vw,40px)] leading-[1.3] tracking-[-1.2px] text-white text-center max-w-[900px]">
          A <span className="text-primary">Fórmula Vértice</span> foi criada para incorporadores e construtores que querem previsibilidade.
        </p>
        <p className="font-normal text-base lg:text-xl text-white/70 text-center max-w-[900px]">
          Um método validado para acelerar vendas e transformar lançamentos em cases de sucesso.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-end gap-10 lg:gap-[115px] mt-4">
          {STATS.map((s) => (
            <div key={s.val} className="flex flex-col items-center gap-[52px]">
              <div className="flex flex-col items-center gap-2.5 text-center">
                <p className="text-gradient-stat font-bold text-[clamp(40px,5vw,80px)] leading-[1.1]">{s.val}</p>
                <p className="font-body text-sm lg:text-base leading-[1.3] tracking-[0.16px]">{s.sub}</p>
              </div>
              <div className="w-[93px] h-[3px] bg-primary rounded" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 lg:gap-12 w-full max-w-[1200px] mt-4">
          <div className="flex-1 h-px bg-white/15 hidden lg:block" />
          <p
            className="px-5 py-4 rounded-3xl text-white font-normal text-sm lg:text-xl text-center tracking-[-0.5px]"
            style={{ border: "1px solid rgba(47,121,168,0.4)" }}
          >
            Resultados que <strong className="text-primary">comprovam</strong> que existe um jeito certo de lançar.
          </p>
          <div className="flex-1 h-px bg-white/15 hidden lg:block" />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative z-10 flex flex-col items-center text-center" style={{ background: "#021c2d" }}>
        <div className="relative w-full flex items-center justify-center py-20 lg:py-32">
          <p className="relative z-10 font-bold text-[clamp(20px,2vw,32px)] leading-[1.3] text-white max-w-[600px] px-site">
            Seu próximo lançamento pode seguir dois caminhos:
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 px-site pb-16 lg:pb-20">
          <p className="font-bold leading-[1.3] text-center">
            <span className="font-normal text-[clamp(18px,1.8vw,32px)] text-white">Mais um empreendimento tentando vender</span>
            <br />
            <span className="text-[clamp(22px,2vw,40px)] text-primary">ou o próximo grande case do mercado imobiliário.</span>
          </p>
          <a
            href="#contato"
            className="flex items-center gap-3 px-6 py-4 rounded-xl no-underline"
            style={{ background: "#ff611b" }}
          >
            <Image src={FV_BTN} alt="" width={32} height={32} unoptimized />
            <span className="font-medium text-base text-[#003556]">Fale com um dos nossos consultores</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
