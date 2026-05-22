"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "https://www.figma.com/api/mcp/asset/e232fd6d-7012-4b8c-badf-f67251e0ddfb",
  "https://www.figma.com/api/mcp/asset/6f0fd642-95c2-4d38-ac89-da3eb2b88cce",
  "https://www.figma.com/api/mcp/asset/ca2dab62-78b6-4cc3-ba1b-218dc5681755",
];

const IMG_H  = 400;
const GAP    = 16;
const PEEK   = 140;

function BlueBar() {
  return <div className="w-20 h-1.5 bg-sec-light rounded" />;
}

export default function PerformanceSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const { top, height } = wrapperRef.current.getBoundingClientRect();
        const scrollable = height - window.innerHeight;
        if (scrollable <= 0) return;
        const progress = Math.max(0, Math.min(1, -top / scrollable));
        const maxTY = (IMAGES.length - 1) * (IMG_H + GAP);
        const ty    = -progress * maxTY;
        const idx   = Math.min(IMAGES.length - 1, Math.round(progress * (IMAGES.length - 1)));
        if (stripRef.current) stripRef.current.style.transform = `translateY(${ty}px)`;
        setActiveIdx(idx);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const wrapperH = `calc(100vh + ${(IMAGES.length - 1) * (IMG_H + GAP)}px)`;

  return (
    <div ref={wrapperRef} style={{ height: wrapperH }} className="relative z-10">
      <div
        className="sticky top-0 h-screen flex items-center px-[120px] gap-20 overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #00243a, #021c2d)" }}
      >
        {/* Imagens */}
        <div className="shrink-0 overflow-hidden relative" style={{ width: 560, height: IMG_H + PEEK }}>
          <div ref={stripRef}>
            {IMAGES.map((src, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden"
                style={{ width: 560, height: IMG_H, marginTop: i > 0 ? GAP : 0 }}
              >
                <Image src={src} alt="" fill unoptimized style={{ objectFit: "cover" }} />
                {i !== activeIdx && (
                  <div className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{ height: 120, background: "linear-gradient(to top, #00243a, transparent)" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-9 flex-1 max-w-[480px]">
          <h2 className="font-bold uppercase leading-[1.1]" style={{ fontSize: "clamp(28px, 2.8vw, 44px)" }}>
            UM HUB PAUTADO EM<br />PERFORMANCE E<br />RESULTADOS
          </h2>
          <hr className="border-t border-white/15" />
          <div className="flex flex-col gap-4">
            <BlueBar />
            <p className="font-medium text-lg leading-relaxed">
              Com uma esteira extensa de serviços, feita de quem incorpora, para que incorpora.
            </p>
            <p className="font-medium text-lg leading-relaxed">
              Vivemos aquilo que oferecemos, vendemos aquilo que acreditamos também ser o melhor
              para nós e para o mercado, feita por especialistas que sabem o que tem mais valor
              para o construtor e incorporador.
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            {IMAGES.map((_, i) => (
              <span key={i} className="h-1 rounded-full transition-all duration-300"
                style={{ width: i === activeIdx ? 32 : 8, background: i === activeIdx ? "#ff611b" : "rgba(255,255,255,0.3)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
