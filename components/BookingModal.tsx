"use client";

import { useState } from "react";
import Image from "next/image";
import { Doctor } from "@/types";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
interface Props {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ doctor, isOpen, onClose }: Props) {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [reason, setReason] = useState("");

  if (!isOpen) return null;


  const handleBooking = () => {
    if (!selectedTime || !reason.trim()) {
     toast.error("Please select a date and enter a reason"); 
     return;
    }

    const newAppointment = {
      id: Date.now().toString(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: selectedDate,
      time: selectedTime,
      reason: reason,
    };

    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    
    // Check for double-booking on this specific time
    const isDoubleBooked = existing.some(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (a: any) => a.doctorId === doctor.id && a.time === selectedTime
    );

    if (isDoubleBooked) {
      toast.error("This time slot is already booked for this doctor.");
      return;
    }

    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    toast.success("Appointment booked successfully!");
    onClose();
    router.push("/appointments");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg sm:rounded-[24px] rounded-t-[24px] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header Section */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Book Appointment</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 text-xl">✕</button>
        </div>

        <div className="p-8 space-y-8">
          {/* Doctor Info Card */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-100">
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
              <p className="text-slate-500">{doctor.specialty}</p>
            </div>
          </div>

          <hr className="border-slate-100" />

         {/* 1. Date Selection Input */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
              <span>📅</span><label htmlFor="date">Select Date</label>
            </div>
            <input 
              id="date"
              type="date" 
              required
              min={new Date().toISOString().split("T")[0]} // Prevents picking past dates
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer font-medium text-slate-700"
            />
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="animate-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2 text-slate-900 font-semibold mb-4">
                <span>🕒</span><label>Select Available Time</label>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {doctor.availableSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-2 rounded-xl border-2 transition-all font-medium text-sm ${
                      selectedTime === time
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm shadow-blue-100"
                        : "border-slate-100 bg-white text-slate-600 hover:border-blue-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
                </div>
            </div>
          )}

          {/* Reason Input */}
          <div>
            <label className="block text-slate-900 font-semibold mb-3">Reason for Visit</label>
            <textarea
              placeholder="Please describe your symptoms or reason for visit"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full h-32 p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none text-slate-700"
            />
          </div>

          <button onClick={handleBooking} className="w-full bg-[#1D61FF] text-white py-4 rounded-[14px] font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}