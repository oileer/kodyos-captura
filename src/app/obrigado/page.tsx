"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "5549991226005";
const WHATSAPP_MSG = encodeURIComponent(
  "Oi! Me cadastrei no KODY OS e quero saber mais sobre os serviços."
);

export default function Obrigado() {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("kodyos_lead_ok") === "1") {
      sessionStorage.removeItem("kodyos_lead_ok");
      setOk(true);
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!ok) return null;

  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 480,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <Image
          src="/kody-logo.png"
          alt="KODY"
          width={80}
          height={28}
          className="anim-fade-in"
          style={{ objectFit: "contain", marginBottom: 40 }}
        />

        <hr
          className="anim-slide-right delay-1"
          style={{
            border: 0,
            height: 2,
            width: 48,
            borderRadius: 2,
            background: "linear-gradient(90deg, #FF4500, rgba(255,69,0,0))",
            marginBottom: 32,
          }}
        />

        <h1
          className="anim-fade-up delay-2"
          style={{
            fontFamily: "var(--font-audiowide)",
            fontSize: "clamp(22px, 6vw, 36px)",
            color: "var(--bone)",
            lineHeight: 1.2,
            marginBottom: 14,
          }}
        >
          Você está na lista.
        </h1>

        <p
          className="anim-fade-up delay-3"
          style={{
            fontSize: 15,
            color: "var(--muted)",
            lineHeight: 1.75,
            marginBottom: 48,
            maxWidth: "38ch",
          }}
        >
          Em breve você recebe as primeiras informações sobre o KODY OS. Enquanto isso, escolha um próximo passo:
        </p>

        <div
          className="anim-fade-up delay-4"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            width: "100%",
          }}
        >
          <a
            href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              display: "block",
              background: "var(--orange)",
              color: "#fff",
              borderRadius: 10,
              padding: "18px 24px",
              fontFamily: "var(--font-audiowide)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            CONHEÇA NOSSOS SERVIÇOS
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: 0,
                color: "rgba(255,255,255,0.7)",
                marginTop: 4,
              }}
            >
              Conversa no WhatsApp →
            </span>
          </a>

          <Link
            href="https://blog.eullerlolato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              display: "block",
              background: "var(--bg-card)",
              border: "1px solid var(--line)",
              color: "var(--bone)",
              borderRadius: 10,
              padding: "18px 24px",
              fontFamily: "var(--font-audiowide)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            CONTEÚDOS SEMANAIS
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: 0,
                color: "var(--muted)",
                marginTop: 4,
              }}
            >
              IA, produção de conteúdo e negócios digitais →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
