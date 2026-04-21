"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
            <span className="text-xl">🏠</span>
          </div>
          <span className="font-bold text-xl tracking-tight">
            VirtuCare
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>👥</span>
            <span>Doctors</span>
          </Link>

          <Link
            href="/appointments"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              pathname.startsWith("/appointments")
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>📅</span>
            <span>Appointments</span>
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-700"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white border-t border-slate-100">
          
          <Link
            href="/"
            onClick={closeMenu}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-colors ${
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            👥 Doctors
          </Link>

          <Link
            href="/appointments"
            onClick={closeMenu}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-colors ${
              pathname.startsWith("/appointments")
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            📅 Appointments
          </Link>

        </div>
      )}
    </nav>
  );
}