"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Appointment,
  getAppointments,
  addAppointment,
  updateAppointmentStatus,
  removeAppointment,
} from "@/lib/storage";

function loadFromStorage(): Appointment[] {
  if (typeof window === "undefined") return [];
  return getAppointments();
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [mounted, setMounted] = useState(false);

  const sync = useCallback(() => {
    setAppointments(loadFromStorage());
  }, []);

  useEffect(() => {
    setMounted(true);
    sync();
  }, [sync]);

  const create = useCallback(
    (data: Omit<Appointment, "id" | "createdAt" | "status">) => {
      const newOne = addAppointment(data);
      sync();
      return newOne;
    },
    [sync]
  );

  const confirm = useCallback(
    (id: string) => {
      updateAppointmentStatus(id, "confirmed");
      sync();
    },
    [sync]
  );

  const cancel = useCallback(
    (id: string) => {
      updateAppointmentStatus(id, "cancelled");
      sync();
    },
    [sync]
  );

  const remove = useCallback(
    (id: string) => {
      removeAppointment(id);
      sync();
    },
    [sync]
  );

  const list = mounted ? appointments : [];

  const stats = {
    total: list.length,
    pending: list.filter((a) => a.status === "pending").length,
    confirmed: list.filter((a) => a.status === "confirmed").length,
    cancelled: list.filter((a) => a.status === "cancelled").length,
  };

  return { appointments: list, create, confirm, cancel, remove, stats, mounted };
}