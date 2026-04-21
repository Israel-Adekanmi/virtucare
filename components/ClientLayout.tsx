"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Stethoscope } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-semibold">VirtuCare</span>
            </div>

            <div className="flex gap-1">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg ${
                  pathname === "/"
                    ? "bg-blue-50 text-blue-700"
                    : "text-neutral-600"
                }`}
              >
                Find Doctors
              </Link>

              <Link
                href="/appointments"
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  pathname === "/appointments"
                    ? "bg-blue-50 text-blue-700"
                    : "text-neutral-600"
                }`}
              >
                <Calendar className="w-4 h-4" />
                My Appointments
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
}