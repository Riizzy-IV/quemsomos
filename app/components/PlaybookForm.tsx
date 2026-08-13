"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ARROW = "/assets/arrow-form.svg";
const WEBHOOK_URL = "https://hook.us1.make.com/2yc7cn1w7ayfk1v99dkyg3xgi2j4fts1";
const PDF_URL = "/playbook-estrategico-balzani.pdf";

const inputClass =
  "border border-[#d9d9d9] rounded-[6px] h-12 px-[23px] py-[19px] w-full text-base text-white placeholder:text-white/30 bg-transparent outline-none focus:border-primary";

const selectClass =
  "border border-[#d9d9d9] rounded-[6px] min-h-12 pl-[23px] pr-10 py-[13px] w-full text-base text-white bg-transparent outline-none focus:border-primary cursor-pointer flex items-center justify-between gap-3 text-left";

const ESTADOS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG",
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const VOCE_E_OPTIONS = [
  "Incorporador/construtor",
  "Dono de Imobiliária",
  "Corretor",
  "Profissional de Marketing",
];

const VGV_OPTIONS = [
  "0 - 6 milhões",
  "7 - 12 milhões",
  "13 - 20 milhões",
  "21 - 50 milhões",
  "Mais de 50 milhões",
];

const PREVISAO_OPTIONS = [
  "Já lancei",
  "Até 3 meses",
  "De 3 a 6 meses",
  "Mais de 6 meses",
  "Ainda não sei",
];

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative w-full">
      <button type="button" onClick={() => setOpen((v) => !v)} className={selectClass}>
        <span className={value ? "" : "text-white/30"}>{value || placeholder}</span>
        <svg
          className="shrink-0"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute z-20 top-full left-0 mt-2 w-full max-h-64 overflow-y-auto rounded-[6px] border border-[#d9d9d9]"
          style={{ background: "#00243a" }}
        >
          {options.map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                onChange(o);
                setOpen(false);
              }}
              className="block w-full text-left px-[23px] py-3 text-white text-base border-none bg-transparent cursor-pointer hover:bg-white/10"
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function PlaybookForm({ className = "" }: { className?: string }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    estado: "",
    voce_e: "",
    vgv: "",
    previsao: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (status !== "sent") return;
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Playbook Estrategico Balzani.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.estado || !form.voce_e || !form.vgv || !form.previsao) {
      setFormError("Preencha todas as perguntas antes de continuar.");
      return;
    }
    setFormError("");
    setStatus("sending");

    const params = new URLSearchParams(window.location.search);
    const now = new Date();

    let remoteIp = "";
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      remoteIp = (await ipRes.json()).ip ?? "";
    } catch {
      remoteIp = "";
    }

    const payload = {
      "Date": now.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }),
      "Time": now.toLocaleTimeString("pt-BR", { hour: "numeric", minute: "2-digit" }),
      "Nome:": form.nome,
      "E-mail:": form.email,
      "form_id": "site-balzani-playbook",
      "Page URL": window.location.href,
      "utm_term": params.get("utm_term") ?? "",
      "Remote IP": remoteIp,
      "Telefone:": form.telefone,
      "Estado:": form.estado,
      "Você é:": form.voce_e,
      "Qual o VGV estimado do seu próximo lançamento?": form.vgv,
      "Qual a previsão do lançamento?": form.previsao,
      "form_name": "Download Playbook",
      "Powered by": "Site Balzani",
      "User Agent": navigator.userAgent,
      "utm_medium": params.get("utm_medium") ?? "",
      "utm_source": params.get("utm_source") ?? "",
      "utm_content": params.get("utm_content") ?? "",
      "utm_campaign": params.get("utm_campaign") ?? "",
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className={`flex flex-col items-center justify-center text-center gap-4 ${className}`}>
        <p className="font-bold text-xl lg:text-2xl text-white uppercase">
          Recebemos seus dados!
        </p>
        <p className="text-base text-white/70 leading-relaxed">
          O download do Playbook Estratégico deve começar automaticamente.
        </p>
        <a
          href={PDF_URL}
          download="Playbook Estrategico Balzani.pdf"
          className="text-sm text-primary underline"
        >
          Se o download não começou, clique aqui.
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-[27px] w-full ${className}`}>
      <input
        required
        placeholder="Digite o seu nome"
        className={inputClass}
        value={form.nome}
        onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
      />

      <input
        required
        placeholder="(xx) -----_----"
        className={inputClass}
        value={form.telefone}
        onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhone(e.target.value) }))}
      />

      <input
        required
        type="email"
        placeholder="e-mail@e-mail.com.br"
        className={inputClass}
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
      />

      <Select
        placeholder="Selecione o seu estado"
        value={form.estado}
        onChange={(v) => setForm((f) => ({ ...f, estado: v }))}
        options={ESTADOS}
      />

      <Select
        placeholder="Você é:"
        value={form.voce_e}
        onChange={(v) => setForm((f) => ({ ...f, voce_e: v }))}
        options={VOCE_E_OPTIONS}
      />

      <Select
        placeholder="Qual o VGV estimado do seu próximo lançamento?"
        value={form.vgv}
        onChange={(v) => setForm((f) => ({ ...f, vgv: v }))}
        options={VGV_OPTIONS}
      />

      <Select
        placeholder="Qual a previsão do lançamento?"
        value={form.previsao}
        onChange={(v) => setForm((f) => ({ ...f, previsao: v }))}
        options={PREVISAO_OPTIONS}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center justify-center gap-[11px] h-14 rounded-xl bg-primary border-none cursor-pointer disabled:opacity-60"
      >
        <Image src={ARROW} alt="" width={32} height={32} unoptimized />
        <span className="font-medium text-base text-[#003556]">
          {status === "sending" ? "Enviando..." : "Baixe o playbook"}
        </span>
      </button>

      {formError && (
        <p className="text-red-400 text-sm text-center">{formError}</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Falha ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}
