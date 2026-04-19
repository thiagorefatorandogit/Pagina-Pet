export interface Appointment {
  id: string;
  petName: string;
  ownerName: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

const STORAGE_KEY = "petcare_appointments";

export function getAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveAppointments(appointments: Appointment[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

export function addAppointment(
  appointment: Omit<Appointment, "id" | "createdAt" | "status">
): Appointment {
  const newAppointment: Appointment = {
    ...appointment,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  const appointments = getAppointments();
  saveAppointments([...appointments, newAppointment]);
  return newAppointment;
}

export function updateAppointmentStatus(
  id: string,
  status: Appointment["status"]
): void {
  const appointments = getAppointments();
  const updated = appointments.map((a) =>
    a.id === id ? { ...a, status } : a
  );
  saveAppointments(updated);
}

export function removeAppointment(id: string): void {
  const appointments = getAppointments();
  saveAppointments(appointments.filter((a) => a.id !== id));
}

export function getLastAppointment(): Appointment | null {
  const appointments = getAppointments();
  if (!appointments.length) return null;
  return appointments[appointments.length - 1];
}