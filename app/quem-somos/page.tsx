import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BlueBar from "@/app/components/BlueBar";
import SectionBadge from "@/app/components/SectionBadge";
import PerformanceSection from "@/app/components/PerformanceSection";

const PURPOSE_ICON = "/assets/purpose-icon.svg";

const TEAM: { img: string; name: string; role: string }[] = [
  { img: "/assets/team-guilherme.jpg", name: "Guilherme Zimerman", role: "CEO & Founder" },
  { img: "/assets/team-enzo.jpg",      name: "Enzo Mirizzi",       role: "COO & Founder" },
  { img: "/assets/team-matheus.jpg",   name: "Matheus Dreher",     role: "Gerente de Performance" },
  { img: "/assets/team-rafael.jpg",    name: "Rafael Games",       role: "Gerente de Design" },
  { img: "/assets/team-duduh.jpg",     name: "Duduh Gouveia",      role: "Coordenador Comercial" },
  { img: "/assets/team-carlos.jpg",    name: "Carlos Bunicki",     role: "Founder Atta" },
];

const VALUES = [
  { n: "01/", title: "Inconformismo",              desc: "Crescer não é desejo, é obrigação. Temos fome de crescimento e somos inconformados com nosso resultado atual. Buscamos conhecimento e melhoria contínua todos os dias." },
  { n: "02/", title: "Disciplina\ne Consistência", desc: "O básico bem-feito diariamente vale mais do que um mês de sorte. Processo é sagrado — quem segue o método, vence. Disciplina é o que diferencia profissionais de amadores." },
  { n: "03/", title: "Resolvemos\nProblemas",      desc: "Trazemos problemas acompanhados de solução. Não falamos 'não sei', falamos 'vou descobrir'. Não travamos, não empurramos, não procrastinamos." },
  { n: "04/", title: "Protagonismo",               desc: "Assumimos culpa e consequência. Não existe 'a culpa é do cliente'. Se algo deu errado, ajustamos o processo e melhoramos. Feedback não dói, desenvolve." },
  { n: "05/", title: "Meritocracia",               desc: "Aqui ninguém cresce por tempo de casa, cresce por resultado. Mérito fala mais alto que amizade ou preferência. Quem entrega mais, ganha mais." },
  { n: "06/", title: "Verdade\nAbsoluta",          desc: "Aqui a verdade é inegociável — preferimos o duro ao confortável. Não existe jeitinho: existe caráter, transparência e correção. Fazemos o certo, mesmo quando ninguém está olhando." },
  { n: "07/", title: "Mentalidade\nde Dono",       desc: "Tratamos cada cliente e entrega como se fosse nossa. Não esperamos ordem: antecipamos e resolvemos. Dono não dá desculpa, dono assume a bronca." },
  { n: "08/", title: "Trabalho\nDuro",             desc: "Fazer o mínimo não existe aqui. Damos o sangue pelo que precisa ser feito. Acreditamos que trabalho duro sempre vence o talento relaxado." },
  { n: "09/", title: "Não\nReclamamos",            desc: "Reclamação é comportamento de criança mimada — aqui não existe vitimismo ou lamúria. Criança chora, adulto resolve. Energia é usada para agir, não para reclamar." },
  { n: "10/", title: "Intensidade\ne Cobrança",    desc: "Aqui a régua é alta — e continua subindo. Pressão não nos quebra, nos molda. Entregamos rápido e com qualidade. Só fica quem aguenta o ritmo e ama jogar o jogo." },
  { n: "11/", title: "Longo Prazo",                desc: "Não buscamos atalhos: construímos algo grande, sólido e duradouro. Somos pacientes na construção e agressivos na execução. Tomamos decisões que fortalecem a Balzani para os próximos anos, não só para o próximo mês." },
];

const PURPOSE_COLS = [
  { label: "Nosso\nPropósito", text: "Existimos para transformar a forma como incorporadoras lançam, comunicam e vendem, com excelência, estratégia e performance." },
  { label: "Nossa\nMissão",    text: "Ajudar incorporadoras e construtoras a lançar e vender empreendimentos imobiliários." },
  { label: "Nossa\nVisão",     text: "Ser, até 2028, o maior e mais completo hub para o mercado imobiliário do Brasil." },
];

const NUMBERS = [
  { pre: "",          val: "R$3.1BI", sub: "Gerados para nossos clientes" },
  { pre: "",          val: "+3.600",  sub: "Unidades vendidas" },
  { pre: "",          val: "+70",     sub: "Lançamentos imobiliários de sucesso" },
  { pre: "em apenas", val: "6 anos",  sub: "de existência" },
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
              SOMOS O <strong className="font-bold text-primary">MAIOR HUB</strong> DE SOLUÇÕES PARA O <strong className="font-bold text-primary">MERCADO IMOBILIÁRIO</strong> DO BRASIL
            </h1>
          </div>

          <div className="flex flex-col justify-end gap-3 mt-8 lg:mt-0">
            <BlueBar />
            <p className="font-medium text-base lg:text-xl leading-relaxed">
              Somos especializada em lançamentos e aceleração de vendas imobiliárias, unindo estratégia, marketing, processos comerciais e inteligência de dados para aumentar a performance de incorporadoras, loteadoras e imobiliárias.
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
              <div className="flex flex-col">
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
                <h3 className="font-bold text-lg lg:text-[24px] leading-snug tracking-[-0.5px] text-white whitespace-pre-line -mt-3 lg:-mt-8">
                  {v.title}
                </h3>
              </div>
              <p className="font-body text-sm lg:text-base leading-relaxed min-w-0">
                {v.desc}
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
            Quem está por trás das estratégias <span className="text-primary">mais eficazes</span> do mercado
          </h2>
        </div>
        <p className="font-body text-sm lg:text-base leading-relaxed max-w-[571px]">
          Nosso time reúne profissionais especializados em marketing imobiliário, estratégia comercial e inteligência de mercado, combinando criatividade, tecnologia e análise de dados para desenvolver operações que vendem mais, com mais previsibilidade e eficiência.
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
