"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppointments } from "@/hooks/useAppointments";
import { services } from "@/data/services";
import styles from "@/styles/form.module.css";

export default function AppointmentForm() {
  const router = useRouter();
  const { create } = useAppointments();

  const [form, setForm] = useState({
    petName: "",
    ownerName: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    create(form);
    router.push("/confirm");
  }

  return (
    <section id="agendar" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agendar Atendimento</h2>
        <p className={styles.subtitle}>
          Preencha os dados abaixo e confirme seu agendamento
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.field}>
            <label className={styles.label}>🐾 Nome do Pet</label>
            <input
              name="petName"
              value={form.petName}
              onChange={handleChange}
              required
              placeholder="Ex: Rex"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>👤 Nome do Responsável</label>
            <input
              name="ownerName"
              value={form.ownerName}
              onChange={handleChange}
              required
              placeholder="Ex: João Silva"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>📱 Telefone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Ex: (44) 99999-9999"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>🩺 Serviço</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={styles.input}
            >
              <option value="">Selecione um serviço</option>
              {services.map((s) => (
                <option key={s.id} value={s.label}>
                  {s.icon} {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>📅 Data</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>⏰ Horário</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>📝 Observações (opcional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Ex: Pet com alergia a produtos com fragrância..."
              rows={3}
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.button}
          >
            {loading ? "Agendando..." : "Confirmar Agendamento 🐾"}
          </button>
        </form>
      </div>
    </section>
  );
}