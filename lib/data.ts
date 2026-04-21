import { Doctor } from '@/types'

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    specialty: "Internal Medicine",
    availableSlots: [
      { date: "2026-04-22", times: ["09:00 AM", "11:00 AM", "02:00 PM"] },
      { date: "2026-04-23", times: ["10:00 AM", "01:00 PM", "03:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Dr. Michael Rodriguez",
    specialty: "Cardiology",
    availableSlots: [
      { date: "2026-04-22", times: ["08:00 AM", "10:00 AM", "04:00 PM"] },
      { date: "2026-04-24", times: ["09:00 AM", "11:00 AM", "02:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Dr. Emily Thompson",
    specialty: "Pediatrics",
    availableSlots: [
      { date: "2026-04-21", times: ["09:00 AM", "11:00 AM", "01:00 PM"] },
      { date: "2026-04-23", times: ["10:00 AM", "02:00 PM", "04:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    availableSlots: [
      { date: "2026-04-22", times: ["08:00 AM", "12:00 PM", "03:00 PM"] },
      { date: "2026-04-25", times: ["09:00 AM", "01:00 PM", "05:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Dr. Priya Patel",
    specialty: "Dermatology",
    availableSlots: [
      { date: "2026-04-21", times: ["10:00 AM", "01:00 PM", "03:00 PM"] },
      { date: "2026-04-24", times: ["09:00 AM", "11:00 AM", "04:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "Neurology",
    availableSlots: [
      { date: "2026-04-23", times: ["08:00 AM", "10:00 AM", "02:00 PM"] },
      { date: "2026-04-25", times: ["09:00 AM", "12:00 PM", "03:00 PM"] },
    ],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  },
];