import { Doctor } from '@/types'
import Link from 'next/link'

type Props = {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{doctor.name}</h2>
      
      <p className="text-sm text-gray-500 mb-2">
        {doctor.specialty}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {doctor.availableSlots.map((slot) => (
          <span
            key={slot}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
          >
            {slot}
          </span>
        ))}
      </div>

      <Link
        href={`/book/${doctor.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
      >
        Book Appointment
      </Link>
    </div>
  )
}