"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ARROW = "/assets/arrow-form.svg";
const WEBHOOK_URL = "https://hook.us1.make.com/2yc7cn1w7ayfk1v99dkyg3xgi2j4fts1";
const PDF_URL = "/playbook-estrategico-balzani.pdf";

const inputClass =
  "border border-[#d9d9d9] rounded-[6px] h-12 px-[23px] py-[19px] w-full text-base text-white placeholder:text-white/30 bg-transparent outline-none focus:border-primary";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function PlaybookForm({ className = "" }: { className?: string }) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
      <div className="flex flex-col gap-[15px]">
        <label className="font-bold text-base text-white">Nome</label>
        <input
          required
          placeholder="Digite o seu nome"
          className={inputClass}
          value={form.nome}
          onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
        />
      </div>

      <div className="flex flex-col gap-[15px]">
        <label className="font-bold text-base text-white">Telefone</label>
        <input
          required
          placeholder="(xx) -----_----"
          className={inputClass}
          value={form.telefone}
          onChange={(e) => setForm((f) => ({ ...f, telefone: maskPhone(e.target.value) }))}
        />
      </div>

      <div className="flex flex-col gap-[15px]">
        <label className="font-bold text-base text-white">E-mail</label>
        <input
          required
          type="email"
          placeholder="e-mail@e-mail.com.br"
          className={inputClass}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </div>

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

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">Falha ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}
