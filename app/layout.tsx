import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VirtuCare | Appointment Booking",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
                <span className="text-xl">🏠</span>
              </div>
              <span className="font-bold text-xl tracking-tight">VirtuCare</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-slate-100 transition-colors">
                <span className="text-blue-600">👥</span>
                <span className="font-medium text-slate-600">Doctors</span>
              </Link>
              <Link href="/appointments" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-600 font-medium">
                <span>📅</span>
                <span>Appointments</span>
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}