import { Doctor } from '@/types'

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    availableSlots: ['09:00', '10:00', '11:00']
  },
  {
    id: '2',
    name: 'Dr. Michael Lee',
    specialty: 'Dermatologist',
    availableSlots: ['12:00', '13:00', '14:00']
  },
  {
    id: '3',
    name: 'Dr. Emily Davis',
    specialty: 'Pediatrician',
    availableSlots: ['09:30', '10:30', '11:30']
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic',
    availableSlots: ['15:00', '16:00']
  },
  {
    id: '5',
    name: 'Dr. Olivia Brown',
    specialty: 'Neurologist',
    availableSlots: ['08:00', '09:00']
  }
]