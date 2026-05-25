import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BlueBar from "@/app/components/BlueBar";
import SectionBadge from "@/app/components/SectionBadge";
import PerformanceSection from "@/app/components/PerformanceSection";

const PURPOSE_ICON = "https://www.figma.com/api/mcp/asset/e1558ce2-5b90-4129-b967-1a06bae91555";

const TEAM: { img: string; name: string; role: string }[] = [
  { img: "https://www.figma.com/api/mcp/asset/cb7fe73f-9fa2-4d1c-b3c3-ec63277aa51e", name: "Guilherme Zimerman", role: "CEO & Founder" },
  { img: "https://www.figma.com/api/mcp/asset/897deb92-2662-4f42-9769-0861295a9c4e", name: "Enzo Mirizi",         role: "COO & Founder" },
  { img: "https://www.figma.com/api/mcp/asset/fcc03a83-8d1d-4ef5-b98a-abdb67fae996", name: "Matheus Dreher",      role: "Gerente de Performance" },
  { img: "https://www.figma.com/api/mcp/asset/4c48cec3-4b3f-44bb-8dd5-7568cfad548c", name: "Rafael Games",        role: "Gerente de Design" },
  { img: "https://www.figma.com/api/mcp/asset/5342026d-6494-4449-b2f0-ac46ab0ac93a", name: "Duduh Gouveia",       role: "Coordenador Comercial" },
  { img: "https://www.figma.com/api/mcp/asset/df053a2b-7957-4f54-9d7a-0ffa679ce873", name: "Carlos Bunicki",      role: "Founder Atta" },
];

const VALUES = [
  { n: "01/", title: "Inconformismo" },
  { n: "02/", title: "Disciplina\ne Consistência" },
  { n: "03/", title: "Resolvemos\nProblemas" },
  { n: "04/", title: "Protagonismo" },
  { n: "05/", title: "Meritocracia" },
  { n: "06/", title: "Verdade\nAbsoluta" },
  { n: "07/", title: "Mentalidade\nde Dono" },
  { n: "08/", title: "Trabalho\nDuro" },
  { n: "09/", title: "Não\nReclamamos" },
  { n: "10/", title: "Compromisso\ncom Resultado" },
  { n: "11/", title: "Longo Prazo" },
];

const PURPOSE_COLS = [
  { label: "Nosso\nPropósito", text: "Existimos para transformar a forma como incorporadoras lançam, comunicam e vendem, com excelência, estratégia e performance." },
  { label: "Nossa\nMissão",    text: "Ajudar incorporadoras e construtoras a lançar e vender empreendimentos imobiliários." },
  { label: "Nossa\nVisão",     text: "Ser, até 2028, o maior e mais completo hub para o mercado imobiliário do Brasil." },
];

const NUMBERS = [
  { pre: "",          val: "+1.1BI", sub: "Gerados para nossos clientes" },
  { pre: "",          val: "+1800",  sub: "Unidades vendidas" },
  { pre: "",          val: "+40",    sub: "Lançamentos feitos" },
  { pre: "em apenas", val: "5 anos", sub: "de existência" },
];

const PHOTO_BG = ["#d9d9d9", "#f3f3f3", "#d9d9d9"];

export default function QuemSomos() {
  return (
    <div className="relative" style={{ overflowX: "clip" }}>
      <div
        className="absolute inset-0 h-[1909px] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #00243a 32%, #021c2d 78%)" }}
      />
      <div
        className="absolute left-0 w-full bottom-0 pointer-events-none"
        style={{ top: 1359, background: "linear-gradient(to bottom, #003556, #00243a)" }}
      />
<Header />

      <div className="relative z-10 flex items-center gap-2 px-site mt-2 text-xs">
        <span className="opacity-20">HOME</span>
        <span className="w-2 h-px bg-white/50" />
        <span>QUEM SOMOS</span>
      </div>

      <section className="relative z-10 px-site pt-10 lg:pt-[60px]">
        <div className="flex flex-col lg:grid lg:gap-16" style={{ gridTemplateColumns: "58% 1fr" }}>
          <div className="flex flex-col gap-6">
            <SectionBadge>QUEM SOMOS</SectionBadge>
            <p className="font-bold text-lg lg:text-2xl uppercase tracking-wide">
              NÃO SOMOS APENAS MAIS UMA AGÊNCIA
            </p>
            <h1 className="font-normal text-[clamp(36px,4.8vw,72px)] leading-[1.05] uppercase">
              SOMOS O{" "}
              <strong className="font-bold text-primary">
                MAIOR HUB<br />DE SOLUÇÕES PARA O MERCADO IMOBILIÁRIO
              </strong>
            </h1>
          </div>

          <div className="flex flex-col justify-end gap-3 mt-8 lg:mt-0">
            <BlueBar />
            <p className="font-medium text-base lg:text-xl leading-relaxed">
              Somos especialistas em lançamentos imobiliários. Com foco total em performance, nosso
              objetivo é maximizar os resultados do seu empreendimento, garantindo que ele seja visto
              pela pessoa certa, na hora certa.
            </p>
          </div>
        </div>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site mt-10 lg:mt-[60px]" />

      <PerformanceSection />

      <section className="values-section relative z-10 px-site mt-20 lg:mt-[140px]">
        <div className="flex flex-col gap-6 lg:gap-10 xl:sticky xl:top-10 xl:self-start mb-10 xl:mb-0">
          <SectionBadge variant="outline">VALORES E CULTURA</SectionBadge>
          <h2 className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.3] tracking-[-1.2px]">
            Acreditamos que uma cultura sólida molda nossos propósito
          </h2>
        </div>

        <div className="flex flex-col">
          {VALUES.map((v, i) => (
            <div
              key={v.n}
              className={`values-item py-6 lg:py-8 ${i < VALUES.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <div className="flex flex-col overflow-hidden">
                <span
                  className="font-extrabold text-[60px] lg:text-[100px] leading-[1] tracking-[-2.5px]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px #ff611b",
                    WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                  }}
                >
                  {v.n}
                </span>
                <h3 className="font-bold text-lg lg:text-[24px] leading-snug tracking-[-0.5px] text-white whitespace-pre-line -mt-8">
                  {v.title}
                </h3>
              </div>
              <p className="font-body text-sm lg:text-base leading-relaxed min-w-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim pretium blandit. Proin quis sem eleifend, consectetur turpis in, consectetur elit. Proin eu ullamcorper diam.
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 mt-16 lg:mt-[100px]">
        {PHOTO_BG.map((bg, i) => (
          <div key={i} className="h-[300px] lg:h-[641px] flex items-center justify-center" style={{ background: bg }}>
            <span className="font-bold text-[40px] lg:text-[60px] text-black tracking-[-1.8px]">Foto</span>
          </div>
        ))}
      </div>

      <section className="relative z-10 px-site pt-16 lg:pt-[100px] pb-10 lg:pb-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0">
          {PURPOSE_COLS.map((col, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3.5 lg:pr-12 ${i > 0 ? "lg:pl-12 lg:border-l border-white/12 pt-10 lg:pt-0 border-t lg:border-t-0" : ""}`}
            >
              <div className="w-[65px] h-[68px] lg:w-[85px] lg:h-[88px] relative">
                <Image src={PURPOSE_ICON} alt="" fill unoptimized style={{ objectFit: "contain" }} />
              </div>
              <p className="font-extrabold text-[clamp(32px,3.5vw,48px)] leading-[1.1] text-primary uppercase whitespace-pre-line">
                {col.label}
              </p>
              <BlueBar />
              <p className="font-medium text-base lg:text-xl leading-relaxed">{col.text}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site" />

      <section className="relative z-10 px-site py-14 lg:py-20">
        <div className="flex justify-center mb-10 lg:mb-[60px]">
          <SectionBadge variant="outline">BALZANI EM NÚMEROS</SectionBadge>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-end gap-10 lg:gap-[60px] xl:gap-[115px]">
          {NUMBERS.map((n, i) => (
            <div key={i} className="flex flex-col items-center gap-8 lg:gap-[52px]">
              <div className="flex flex-col items-center gap-2.5 text-center">
                {n.pre && (
                  <p className="font-body text-sm lg:text-base leading-[1.3] tracking-[0.16px]">
                    {n.pre}
                  </p>
                )}
                <p className="text-gradient-stat font-bold text-[clamp(40px,5vw,80px)] leading-[1.1]">
                  {n.val}
                </p>
                <p className="font-body text-sm lg:text-base leading-[1.3] tracking-[0.16px]">
                  {n.sub}
                </p>
              </div>
              <div className="w-[93px] h-[3px] bg-primary rounded" />
            </div>
          ))}
        </div>
      </section>

      <hr className="relative z-10 border-t border-white/15 mx-site" />

      <section className="relative z-10 px-site py-14 lg:py-20 flex flex-col lg:grid lg:gap-20"
        style={{ gridTemplateColumns: "535px 1fr", alignItems: "end" }}
      >
        <div className="flex flex-col gap-6 lg:gap-10 mb-8 lg:mb-0">
          <SectionBadge variant="outline">NOSSAS LIDERANÇAS</SectionBadge>
          <h2 className="font-bold text-[clamp(28px,3vw,40px)] leading-[1.3] tracking-[-1.2px] max-w-[455px]">
            Quem está por trás das estratégias mais eficazes do mercado
          </h2>
        </div>
        <p className="font-body text-sm lg:text-base leading-relaxed max-w-[571px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim pretium blandit.
          Proin quis sem eleifend, consectetur turpis in, consectetur elit. Proin eu ullamcorper diam.
        </p>
      </section>

      <div className="relative z-10 flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:overflow-visible">
        {TEAM.map((member) => (
          <div key={member.name} className="flex-none w-[260px] lg:w-auto h-[400px] lg:h-[480px] relative border border-[rgba(47,121,168,0.2)] overflow-hidden">
            <Image src={member.img} alt={member.name} fill unoptimized style={{ objectFit: "cover" }} />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,36,58,0) 60%, #00243a 100%), linear-gradient(180deg, rgba(0,36,58,0) 0%, rgba(0,36,58,.2) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-4 right-4 lg:bottom-6 lg:left-5 lg:right-5 flex flex-col gap-1">
              <p className="font-bold text-base lg:text-lg leading-[1.1]">{member.name}</p>
              <p className="font-normal text-base lg:text-lg leading-[1.1] text-primary">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
