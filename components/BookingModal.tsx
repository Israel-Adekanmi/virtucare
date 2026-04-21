"use client";

import { useState } from "react";
import { X, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Doctor } from "@/types";
import { useAppointments } from "@/context/AppointmentContext";

export function BookingModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  const router = useRouter();
  const { addAppointment } = useAppointments();

  const times = doctor.availableSlots.find((s) => s.date === date)?.times || [];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !reason) {
      toast.error("Fill all fields");
      return;
    }

    addAppointment({
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date,
      time,
      reason,
    });

    toast.success("Booked!");
    onClose();
    router.push("/appointments");
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Book Appointment</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm">Date</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {doctor.availableSlots.map((s) => (
                <button
                  type="button"
                  key={s.date}
                  onClick={() => {
                    setDate(s.date);
                    setTime("");
                  }}
                  className="p-2 border rounded"
                >
                  {s.date}
                </button>
              ))}
            </div>
          </div>

          {date && (
            <div>
              <label className="text-sm">Time</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {times.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTime(t)}
                    className="p-2 border rounded"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          <textarea
            placeholder="Reason"
            className="w-full border p-2 rounded"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
