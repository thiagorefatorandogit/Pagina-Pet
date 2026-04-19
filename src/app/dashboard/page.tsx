"use client";

import Link from "next/link";
import { useAppointments } from "@/hooks/useAppointments";
import AppointmentCard from "@/components/AppointmentCard";
import StatsCard from "@/components/StatsCard";
import styles from "@/styles/dashboard.module.css";

export default function DashboardPage() {
  const { appointments, confirm, cancel, remove, stats } = useAppointments();

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.title}>📋 Agenda Geral</h1>
            <p className={styles.subtitle}>Gerencie todos os agendamentos do PetCare</p>
          </div>
          <Link href="/" className={styles.newButton}>
            + Novo Agendamento
          </Link>
        </div>

        <div className={styles.statsGrid}>
          <StatsCard title="Total" value={stats.total} color="blue" />
          <StatsCard title="Em Análise" value={stats.pending} color="yellow" />
          <StatsCard title="Confirmados" value={stats.confirmed} color="green" />
          <StatsCard title="Cancelados" value={stats.cancelled} color="red" />
        </div>

        {appointments.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🐾</div>
            <h2 className={styles.emptyTitle}>Nenhum agendamento ainda</h2>
            <p className={styles.emptyText}>
              Faça o primeiro agendamento para ele aparecer aqui!
            </p>
            <Link href="/" className={styles.newButton}>
              Agendar agora
            </Link>
          </div>
        ) : (
          <div className={styles.list}>
            <p className={styles.count}>
              {appointments.length} agendamento{appointments.length !== 1 ? "s" : ""} encontrado{appointments.length !== 1 ? "s" : ""}
            </p>
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                onConfirm={confirm}
                onCancel={cancel}
                onRemove={remove}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}