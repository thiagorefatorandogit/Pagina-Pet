import Link from "next/link";

export default function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        padding: "4rem 1.5rem",
        textAlign: "center",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            marginBottom: "1rem",
          }}
        >
          Seu pet merece o melhor cuidado 🐾
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "2rem",
            opacity: 0.9,
          }}
        >
          Agende agora mesmo e garanta um atendimento de qualidade
          para o seu companheiro!
        </p>
        <Link
          href="#agendar"
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            padding: "0.9rem 2.5rem",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            display: "inline-block",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
        >
          Agendar agora
        </Link>
      </div>
    </section>
  );
}