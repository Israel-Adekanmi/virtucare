# VirtuCare — Appointment Booking System

VirtuCare is a streamlined healthcare platform designed to bridge the gap between patients and specialists. This project was built as a 72-hour technical assessment to demonstrate a core appointment booking flow using modern web technologies.

### 🚀 https://virtucare-three.vercel.app/
### 📂 https://github.com/Israel-Adekanmi/virtucare

---

## 🛠 Tech Stack
* **Framework:** Next.js 14 (App Router) 
* **Language:** TypeScript 
* **Styling:** Tailwind CSS 
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Persistence:** Browser LocalStorage

---

## 💡 My Approach
My primary goal was to balance **speed** with **maintainability**. I followed a modular architecture to ensure the UI remained scalable and easy to debug.

1. **Data Modeling:** Defined strict TypeScript interfaces for `Doctor` and `Appointment` to prevent runtime errors and ensure data consistency.
2.  **Stateful UI:** Utilized a centralized Modal system for booking to provide a seamless, single-page feel without unnecessary page transitions.
3.  **Progressive Disclosure:** Designed the booking form to reveal time slots only after a date is selected, reducing cognitive load for the user.

---

## 🧠 Key Decisions Made

### 1. Client-Side Persistence
Instead of a complex backend, I chose **LocalStorage** to meet the requirement for data persistence after page refreshes. This allowed for a zero-latency experience while fulfilling the assessment's core criteria.

### 2. Design System & UX
I moved away from generic AI-generated patterns to create a bespoke healthcare aesthetic.
* **Visual Hierarchy:** Used specific `rounded-[24px]` corners and custom blue accents (`#1D61FF`) to create a soft, professional feel.
* **Validation:** Implemented checks to prevent double-booking the same doctor at the same time.
* **Empty States:** Designed a custom "No Appointments" view to guide new users back to the doctor list.

### 3. Responsive Strategy
The app uses a mobile-first grid system. On small screens, the layout shifts from a multi-column grid to a single-column stack to maintain readability and touch-target size.

---

## 🚧 Challenges Faced

### ⚡ Next.js Hydration
One of the main challenges was accessing `localStorage` in Next.js. Since the server renders the page first, it doesn't have access to browser storage. I solved this by wrapping the data retrieval inside a `useEffect` hook, ensuring the code only runs on the client side after the initial mount.

### ⚡ Form Interaction Logic
Coordinating the state between the date picker and the time-slot "pills" required careful state management. I implemented logic to ensure that changing a date would reset any previously selected time slots to prevent inconsistent form submissions.

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Israel-Adekanmi/virtucare

2. **Install dependencies:**
   ```bash
   npm install

3. **Run the development server:**
   ```bash
   npm run dev

4. **Build for production:**
   ```bash
   npm run build


✅ **Feature Checklist**
* Doctors Listing (at least 5 doctors) 
- Responsive Design (Mobile + Desktop) 
- Interactive Booking Modal 
- Date & Time Selection
- Appointment Dashboard
- Cancel/Delete Appointments
- Data Persistence 
   
