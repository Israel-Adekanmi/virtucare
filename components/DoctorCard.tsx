"use client";

import { Doctor } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  const times = doctor.availableSlots[0]?.times || [];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all">
      
      {/* Top section */}
      <div className="flex items-center gap-4 mb-5">
        
        {/* Image FIXED */}
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            {doctor.name}
          </h2>
          <p className="text-sm text-slate-500">
            {doctor.specialty}
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
        <span>📅</span>
        <span>Available Today</span>
      </div>

      {/* Time slots FIXED */}
      <div className="flex flex-wrap gap-2 mb-6">
        {times.map((time, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full"
          >
            {time}
          </span>
        ))}
      </div>

      {/* Button */}
      <Link
        href={`/book/${doctor.id}`}
        className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        Book Appointment
      </Link>
    </div>
  );
}