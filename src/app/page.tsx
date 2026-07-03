import Image from "next/image";
import CaptureForm from "@/components/CaptureForm";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          borderBottom: "1px solid var(--line)",
          padding: "16px 0",
          position: "sticky",
          top: 0,
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 20px" }}>
          <Image src="/kody-logo.png" alt="KODY" width={72} height={24} style={{ objectFit: "contain" }} />
        </div>
      </header>

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "56px 20px 80px" }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--muted-2)",
          }}
        >
          <span style={{ color: "var(--orange)", fontFamily: "var(--font-audiowide)" }}>01</span>
          Acesso Antecipado
        </div>

        <hr
          style={{
            border: 0,
            height: 2,
            width: 48,
            borderRadius: 2,
            background: "linear-gradient(90deg, #FF4500, rgba(255,69,0,0))",
            marginBottom: 24,
          }}
        />

        <h1
          style={{
            fontFamily: "var(--font-audiowide)",
            fontSize: "clamp(28px, 8vw, 56px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            color: "var(--bone)",
            marginBottom: 16,
          }}
        >
          KODY OS
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.5vw, 17px)",
            color: "var(--muted)",
            marginBottom: 10,
            lineHeight: 1.75,
            maxWidth: "52ch",
          }}
        >
          Um sistema de IA que estrutura sua empresa do zero — redes sociais, conteúdo,
          atendimento e vendas — tudo funcionando junto, de forma automática.
        </p>

        <p style={{ fontSize: 13, color: "var(--muted-2)", marginBottom: 40 }}>
          Sistema em desenvolvimento. Cadastre-se para acesso antecipado.
        </p>

        {/* Benefits */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 10,
            marginBottom: 40,
          }}
        >
          {[
            "Perfil online estruturado",
            "Conteúdo com IA",
            "Automação de WhatsApp",
            "Acesso vitalício",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "12px 14px",
                fontSize: 13,
                color: "var(--bone)",
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <span style={{ color: "var(--orange)", flexShrink: 0 }}>→</span>
              {item}
            </div>
          ))}
        </div>

        <CaptureForm />

        <p
          style={{
            marginTop: 40,
            fontSize: 11,
            color: "var(--muted-2)",
            textAlign: "center",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          KODY — Agência de Automação e Engenharia de Vendas com IA
        </p>
      </div>
    </main>
  );
}
