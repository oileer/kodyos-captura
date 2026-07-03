"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function CaptureForm() {
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleWhatsApp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, whatsapp: formatWhatsApp(e.target.value) }));
  };

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
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--line)",
          borderLeft: "2px solid var(--orange)",
          borderRadius: 14,
          padding: "40px 36px",
          textAlign: "center",
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
        <p
          style={{
            fontFamily: "var(--font-audiowide)",
            fontSize: 18,
            color: "var(--bone)",
            marginBottom: 10,
          }}
        >
          Você está na lista.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 14 }}>
          Em breve entraremos em contato com as próximas etapas.
        </p>
      </div>
    );
  }

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
    textTransform: "uppercase",
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
        padding: "40px 36px",
        maxWidth: 480,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 24,
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
          placeholder="(47) 99999-9999"
          value={form.whatsapp}
          onChange={handleWhatsApp}
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
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "var(--font-audiowide)",
          letterSpacing: "0.1em",
          cursor: status === "loading" ? "not-allowed" : "pointer",
          transition: "opacity 0.2s",
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
        Sem spam. Seus dados são usados apenas para contato sobre o KODY OS.
      </p>
    </form>
  );
}
