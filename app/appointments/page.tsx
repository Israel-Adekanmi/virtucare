"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Appointment } from "@/types";
import AppointmentCard from "@/components/AppointmentCard";
import { toast } from "react-toastify";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(data);
  }, []);

  const handleCancel = (id: string) => {
    const updated = appointments.filter((appt) => appt.id !== id);

    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));

    toast.success("Appointment cancelled ❌");
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          My Appointments
        </h1>
        <p className="text-lg text-slate-500">
          View and manage your upcoming healthcare appointments.
        </p>
      </header>

      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] text-center px-6">
          <div className="bg-slate-50 p-8 rounded-full mb-6">
            <span className="text-6xl">📅</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            No appointments yet
          </h2>

          <p className="text-slate-500 mb-8 max-w-sm">
            You haven't booked any appointments yet.
          </p>

          <Link
            href="/"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            Browse Doctors
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <AppointmentCard
              key={appt.id}
              appt={appt}
              onCancel={handleCancel}
            />
          ))}
        </div>
      )}
    </div>
  );
}