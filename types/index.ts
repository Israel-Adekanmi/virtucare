export type Doctor = {
  id: string
  name: string
  specialty: string
  availableSlots: string[]
}

export type Appointment = {
  id: string
  doctorId: string
  doctorName: string
  date: string
  time: string
  reason: string
}