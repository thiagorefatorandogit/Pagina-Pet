"use client";

import { Appointment } from "@/lib/storage";

interface AppointmentCardProps {
  appointment: Appointment;
  onConfirm: (id: string) => void;
  onCancel: (id: string) => void;
  onRemove: (id: string) => void;
}

const statusConfig = {
  pending: { label: "Em análise", bg: "#fef9c3", color: "#a16207", border: "#facc15" },
  confirmed: { label: "Confirmado", bg: "#dcfce7", color: "#15803d", border: "#4ade80" },
  cancelled: { label: "Cancelado", bg: "#fee2e2", color: "#b91c1c", border: "#f87171" },
};

export default function AppointmentCard({
  appointment,
  onConfirm,
  onCancel,
  onRemove,
}: AppointmentCardProps) {
  const status = statusConfig[appointment.status];

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "14px",
        padding: "1.5rem",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        border: "1px solid #f1f5f9",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
      }}
    >
      {/* Header do card */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e293b", margin: 0 }}>
            🐾 {appointment.petName}
          </h3>
          <p style={{ fontSize: "0.85rem", color: "#64748b", margin: "0.2rem 0 0" }}>
            👤 {appointment.ownerName}
          </p>
        </div>

        {/* Badge de status */}
        <span
          style={{
            backgroundColor: status.bg,
            color: status.color,
            border: `1px solid ${status.border}`,
            borderRadius: "50px",
            padding: "0.3rem 0.9rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {status.label}
        </span>
      </div>

      {/* Informações */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.5rem",
          backgroundColor: "#f8fafc",
          borderRadius: "10px",
          padding: "1rem",
        }}
      >
        <div>
          <p style={infoLabelStyle}>Serviço</p>
          <p style={infoValueStyle}>🩺 {appointment.service}</p>
        </div>
        <div>
          <p style={infoLabelStyle}>Telefone</p>
          <p style={infoValueStyle}>📱 {appointment.phone}</p>
        </div>
        <div>
          <p style={infoLabelStyle}>Data</p>
          <p style={infoValueStyle}>📅 {formatDate(appointment.date)}</p>
        </div>
        <div>
          <p style={infoLabelStyle}>Horário</p>
          <p style={infoValueStyle}>⏰ {appointment.time}</p>
        </div>
        {appointment.notes && (
          <div style={{ gridColumn: "1 / -1" }}>
            <p style={infoLabelStyle}>Observações</p>
            <p style={infoValueStyle}>📝 {appointment.notes}</p>
          </div>
        )}
      </div>

      {/* Botões de ação */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {appointment.status === "pending" && (
          <button
            onClick={() => onConfirm(appointment.id)}
            style={{ ...btnStyle, backgroundColor: "#15803d", color: "white" }}
          >
            ✅ Confirmar
          </button>
        )}
        {appointment.status !== "cancelled" && (
          <button
            onClick={() => onCancel(appointment.id)}
            style={{ ...btnStyle, backgroundColor: "#f59e0b", color: "white" }}
          >
            ⏸ Cancelar
          </button>
        )}
        <button
          onClick={() => onRemove(appointment.id)}
          style={{ ...btnStyle, backgroundColor: "#ef4444", color: "white" }}
        >
          🗑 Remover
        </button>
      </div>
    </div>
  );
}

const infoLabelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#94a3b8",
  textTransform: "uppercase",
  margin: 0,
};

const infoValueStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#1e293b",
  margin: "0.2rem 0 0",
};

const btnStyle: React.CSSProperties = {
  border: "none",
  borderRadius: "8px",
  padding: "0.5rem 1rem",
  fontSize: "0.85rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "opacity 0.2s",
  flex: 1,
};