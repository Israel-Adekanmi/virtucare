import DoctorCard from '@/components/DoctorCard'
import { doctors } from '@/lib/data'

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Available Doctors
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </main>
  )
}