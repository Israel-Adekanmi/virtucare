export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availableSlots: string[];
  image: string;
}

export type Appointment = {
  id: string
  doctorId: string
  doctorName: string
  date: string
  time: string
  reason: string
}