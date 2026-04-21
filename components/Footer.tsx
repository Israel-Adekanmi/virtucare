"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-slate-50 to-white border-t border-slate-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                🏠
              </div>
              <span className="font-bold text-xl">VirtuCare</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              A simple doctor booking system designed to make healthcare
              appointments faster, easier, and more accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">
              Quick Links
            </h3>

            <div className="space-y-3 text-sm">
              <Link href="/" className="block text-slate-600 hover:text-blue-600">
                👥 Doctors
              </Link>

              <Link href="/appointments" className="block text-slate-600 hover:text-blue-600">
                📅 Appointments
              </Link>
            </div>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">
              Get in Touch
            </h3>

            <div className="space-y-2 text-sm text-slate-600">
              <p>📍 Lagos, Nigeria</p>
              <p>📧 support@virtucare.com</p>
              <p>📞 +234 800 000 0000</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VirtuCare. All rights reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer">Help</span>
          </div>
        </div>

      </div>
    </footer>
  );
}