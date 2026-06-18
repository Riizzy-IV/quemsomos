"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

const WEBHOOK_URL = "https://hook.us1.make.com/gp8peabjb51kq0obkpxq84ytu0nu2syl";

const inputClass =
  "w-full h-12 bg-black rounded-lg px-4 text-sm text-white placeholder:text-white/40 outline-none border border-white/10 focus:border-primary";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    site: "",
    voce_e: "",
    vgv: "",
    previsao: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!open || typeof document === "undefined") return null;

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

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
      "form_id": "site-balzani-contato",
      "Page URL": window.location.href,
      "utm_term": params.get("utm_term") ?? "",
      "Remote IP": remoteIp,
      "Telefone:": form.telefone,
      "Você é:": form.voce_e,
      "form_name": "Novo formulário",
      "Powered by": "Site Balzani",
      "User Agent": navigator.userAgent,
      "utm_medium": params.get("utm_medium") ?? "",
      "utm_source": params.get("utm_source") ?? "",
      "utm_content": params.get("utm_content") ?? "",
      "utm_campaign": params.get("utm_campaign") ?? "",
      "Site ou instagram da empresa:": form.site,
      "Qual VGV do seu lançamento imobiliário": form.vgv,
      "Qual a previsão para o seu Lançamento?": form.previsao,
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

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[480px] rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white flex items-center justify-center relative py-4">
          <span className="font-bold text-base text-[#003556]">Balzani Company</span>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#003556] text-lg leading-none border-none bg-transparent cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="bg-[#0a0a0a] px-6 py-8 flex flex-col gap-5">
          {status === "sent" ? (
            <p className="text-white font-bold text-center text-lg py-8">
              Recebemos seus dados! Em breve um consultor vai falar com você.
            </p>
          ) : (
            <>
              <p className="font-bold text-white text-center text-lg leading-snug">
                Preencha o formulário abaixo se você está a procura de aumentar suas vendas através da internet
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input required placeholder="Nome:" className={inputClass} value={form.nome} onChange={update("nome")} />
                <input required type="email" placeholder="E-mail:" className={inputClass} value={form.email} onChange={update("email")} />
                <input required placeholder="Telefone:" className={inputClass} value={form.telefone} onChange={update("telefone")} />
                <input placeholder="Site ou instagram da empresa:" className={inputClass} value={form.site} onChange={update("site")} />

                <select required className={inputClass} value={form.voce_e} onChange={update("voce_e")}>
                  <option value="">Você é:</option>
                  <option>Corretor de imóveis</option>
                  <option>Dono de imobiliária</option>
                  <option>Construtor/Incorporador</option>
                </select>

                <select required className={inputClass} value={form.vgv} onChange={update("vgv")}>
                  <option value="">Qual VGV do seu lançamento imobiliário?</option>
                  <option>0 a 6 milhões</option>
                  <option>6 a 12 milhões</option>
                  <option>20 a 50 milhões</option>
                  <option>Acima de 50 milhões</option>
                </select>

                <select required className={inputClass} value={form.previsao} onChange={update("previsao")}>
                  <option value="">Qual a previsão para o seu Lançamento?</option>
                  <option>Dentro de 3 meses</option>
                  <option>De 3 a 6 meses</option>
                  <option>Já lancei</option>
                  <option>Sem previsão</option>
                </select>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-12 bg-primary rounded-lg text-white font-medium border-none cursor-pointer disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando..." : "Enviar"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">Falha ao enviar. Tente novamente.</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
