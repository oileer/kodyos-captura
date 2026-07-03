import CaptureForm from "@/components/CaptureForm";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 600, width: "100%", position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 28,
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

        {/* Accent line */}
        <hr
          style={{
            border: 0,
            height: 2,
            width: 64,
            borderRadius: 2,
            background: "linear-gradient(90deg, #FF4500, rgba(255,69,0,0))",
            marginBottom: 28,
          }}
        />

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-audiowide)",
            fontSize: "clamp(32px, 7vw, 64px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            color: "var(--bone)",
            marginBottom: 20,
          }}
        >
          KODY OS
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "var(--muted)",
            maxWidth: "54ch",
            marginBottom: 12,
            lineHeight: 1.7,
          }}
        >
          Um sistema de IA que estrutura sua empresa do zero — redes sociais, conteúdo, atendimento e
          vendas — tudo funcionando junto, de forma automática.
        </p>

        <p style={{ fontSize: 14, color: "var(--muted-2)", marginBottom: 56 }}>
          Sistema em desenvolvimento. Cadastre-se para acesso antecipado.
        </p>

        {/* Benefits */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
            marginBottom: 48,
          }}
        >
          {[
            "Perfil online estruturado",
            "Produção de conteúdo com IA",
            "Automação de WhatsApp",
            "Acesso vitalício antecipado",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: 10,
                padding: "14px 16px",
                fontSize: 13,
                color: "var(--bone)",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span style={{ color: "var(--orange)", fontWeight: 700, flexShrink: 0 }}>→</span>
              {item}
            </div>
          ))}
        </div>

        {/* Form */}
        <CaptureForm />

        {/* Footer */}
        <p
          style={{
            marginTop: 48,
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
