import { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    specialty: "Internal Medicine",
    availableSlots: ["09:00 AM", "11:00 AM", "02:00 PM"],
    image: "/doctors/dr-sarah.jpg",
  },
  {
    id: "2",
    name: "Dr. Michael Rodriguez",
    specialty: "Cardiology",
    availableSlots: ["08:00 AM", "10:00 AM", "04:00 PM"],
    image: "/doctors/dr-michael.jpg",
  },
  {
    id: "3",
    name: "Dr. Emily Thompson",
    specialty: "Pediatrics",
    availableSlots: ["09:00 AM", "11:00 AM", "01:00 PM"],
    image: "/doctors/dr-emily.jpg",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    availableSlots: ["08:00 AM", "12:00 PM", "03:00 PM"],
    image: "/doctors/dr-james.jpg",
  },
  {
    id: "5",
    name: "Dr. Priya Patel",
    specialty: "Dermatology",
    availableSlots: ["10:00 AM", "01:00 PM", "03:00 PM"],
    image: "/doctors/dr-priya.jpg",
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "Neurology",
    availableSlots: ["08:00 AM", "10:00 AM", "02:00 PM"],
    image: "/doctors/dr-robert.jpg",
  },
];