import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VirtuCare | Appointment Booking",
  icons: {
    icon: "/iconforvirtucare.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </main>

      </body>
    </html>
  );
}