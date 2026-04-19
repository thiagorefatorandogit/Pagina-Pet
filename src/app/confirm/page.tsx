"use client";

import { useState } from "react";
import Link from "next/link";
import { Appointment, getLastAppointment } from "@/lib/storage";

export default function ConfirmPage() {
  const [appointment] = useState<Appointment | null>(() => getLastAppointment());

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem" }}>
      <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "3rem 2rem", maxWidth: "520px", width: "100%", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", textAlign: "center" }}>
        <div style={{ width: "80px", height: "80px", backgroundColor: "#dcfce7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", margin: "0 auto 1.5rem" }}>✅</div>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1e293b", marginBottom: "0.5rem" }}>Agendamento Realizado!</h1>
        <p style={{ color: "#64748b", marginBottom: "2rem" }}>Seu agendamento foi registrado com sucesso. Veja os detalhes abaixo:</p>

        {appointment && (
          <div style={{ backgroundColor: "#f8fafc", borderRadius: "12px", padding: "1.5rem", textAlign: "left", marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            <InfoRow icon="🐾" label="Pet" value={appointment.petName} />
            <InfoRow icon="👤" label="Responsável" value={appointment.ownerName} />
            <InfoRow icon="📱" label="Telefone" value={appointment.phone} />
            <InfoRow icon="🩺" label="Serviço" value={appointment.service} />
            <InfoRow icon="📅" label="Data" value={formatDate(appointment.date)} />
            <InfoRow icon="⏰" label="Horário" value={appointment.time} />
            {appointment.notes && <InfoRow icon="📝" label="Observações" value={appointment.notes} />}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <Link href="/dashboard" style={{ backgroundColor: "#e8845c", color: "white", padding: "0.9rem", borderRadius: "10px", fontWeight: 700, textDecoration: "none", display: "block" }}>
            📋 Ver Agenda Geral
          </Link>
          <Link href="/" style={{ backgroundColor: "#f1f5f9", color: "#475569", padding: "0.9rem", borderRadius: "10px", fontWeight: 600, textDecoration: "none", display: "block" }}>
            🏠 Voltar para o Início
          </Link>
        </div>
      </div>
    </main>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <span>{icon}</span>
      <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 600, minWidth: "90px" }}>{label}</span>
      <span style={{ fontSize: "0.9rem", color: "#1e293b", fontWeight: 500 }}>{value}</span>
    </div>
  );
}