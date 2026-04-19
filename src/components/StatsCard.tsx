"use client";
interface StatsCardProps {
  title: string;
  value: number;
  color: "blue" | "yellow" | "green" | "red";
}

const colorMap = {
  blue: {
    bg: "#e0f2fe",
    text: "#0369a1",
    border: "#38bdf8",
  },
  yellow: {
    bg: "#fef9c3",
    text: "#a16207",
    border: "#facc15",
  },
  green: {
    bg: "#dcfce7",
    text: "#15803d",
    border: "#4ade80",
  },
  red: {
    bg: "#fee2e2",
    text: "#b91c1c",
    border: "#f87171",
  },
};

export default function StatsCard({ title, value, color }: StatsCardProps) {
  const colors = colorMap[color];

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        borderLeft: `4px solid ${colors.border}`,
        borderRadius: "12px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          color: colors.text,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontSize: "2.5rem",
          fontWeight: 800,
          color: colors.text,
          lineHeight: 1,
        }}
      >
        {value}
      </span>
    </div>
  );
}