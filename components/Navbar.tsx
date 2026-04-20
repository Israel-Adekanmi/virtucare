import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-lg font-bold text-blue-600">
          VirtuCare
        </Link>

        <div className="flex gap-4">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-blue-600 transition"
          >
            Doctors
          </Link>

          <Link
            href="/appointments"
            className="text-sm text-gray-600 hover:text-blue-600 transition"
          >
            Appointments
          </Link>
        </div>

      </div>
    </nav>
  )
}