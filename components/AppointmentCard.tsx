"use client";

import { Appointment } from "@/types";

interface Props {
  appt: Appointment;
  onCancel: (id: string) => void;
}

export default function AppointmentCard({ appt, onCancel }: Props) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg text-slate-900 flex items-center gap-2">
            👨‍⚕️ {appt.doctorName}
          </h3>
          <p className="text-slate-500 text-sm">{appt.specialty}</p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
          Upcoming
        </span>
      </div>

      {/* Details */}
      <div className="mt-4 text-sm text-slate-600 space-y-2">
        <p className="flex items-center gap-2">
          📅 <span>{appt.date}</span>
        </p>

        <p className="flex items-center gap-2">
          ⏱️ <span>{appt.time}</span>
        </p>

        <p className="flex items-start gap-2">
          📝 <span>{appt.reason}</span>
        </p>
      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => onCancel(appt.id)}
          className="px-4 py-2 text-sm rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium"
        >
        🚮 Cancel
        </button>
      </div>
    </div>
  );
}