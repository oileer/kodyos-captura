"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function CaptureForm() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.whatsapp) return;
    setStatus("loading");
    try {
      await addDoc(collection(db, "leads"), {
        nome: form.nome.trim(),
        email: form.email.trim().toLowerCase(),
        whatsapp: form.whatsapp.replace(/\D/g, ""),
        criadoEm: serverTimestamp(),
        origem: "captura.eullerlolato.com",
      });
      router.push("/obrigado");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0f0f0f",
    border: "1px solid var(--line)",
    borderRadius: 8,
    padding: "14px 16px",
    color: "var(--bone)",
    fontSize: 15,
    fontFamily: "var(--font-inter)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "var(--muted-2)",
    marginBottom: 8,
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderLeft: "2px solid var(--orange)",
        borderRadius: 14,
        padding: "clamp(24px, 5vw, 36px)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div>
        <label style={labelStyle}>Nome</label>
        <input
          style={inputStyle}
          type="text"
          placeholder="Seu nome completo"
          value={form.nome}
          onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>E-mail</label>
        <input
          style={inputStyle}
          type="email"
          placeholder="seu@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
        />
      </div>

      <div>
        <label style={labelStyle}>WhatsApp</label>
        <input
          style={inputStyle}
          type="tel"
          placeholder="(49) 99999-9999"
          value={form.whatsapp}
          onChange={(e) => setForm((f) => ({ ...f, whatsapp: formatWhatsApp(e.target.value) }))}
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          background: status === "loading" ? "var(--muted-2)" : "var(--orange)",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "16px 0",
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "var(--font-audiowide)",
          letterSpacing: "0.08em",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "opacity 0.2s",
          width: "100%",
        }}
      >
        {status === "loading" ? "Enviando..." : "GARANTIR ACESSO ANTECIPADO"}
      </button>

      {status === "error" && (
        <p style={{ color: "#ef4444", fontSize: 13, textAlign: "center" }}>
          Algo deu errado. Tente novamente.
        </p>
      )}

      <p style={{ fontSize: 12, color: "var(--muted-2)", textAlign: "center" }}>
        Sem spam. Dados usados apenas para contato sobre o KODY OS.
      </p>
    </form>
  );
}
