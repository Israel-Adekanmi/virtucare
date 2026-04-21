import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/lib/data";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-1 space-y-10">
      
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-blue-600">
          <span className="text-3xl">🩺</span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Available Doctors
          </h1>
        </div>

        <p className="text-lg text-slate-500 max-w-2xl">
          Browse our network of healthcare professionals and book your appointment.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}