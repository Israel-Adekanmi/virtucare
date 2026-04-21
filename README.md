# VirtuCare — Appointment Booking System

VirtuCare is a streamlined healthcare platform designed to bridge the gap between patients and specialists. [cite_start]This project was built as a 72-hour technical assessment to demonstrate a core appointment booking flow using modern web technologies[cite: 1, 3].

### 🚀 [(https://virtucare-three.vercel.app/)]
### 📂 [https://github.com/Israel-Adekanmi/virtucare]

---

## 🛠 Tech Stack
* [cite_start]**Framework:** Next.js 14 (App Router) [cite: 47]
* [cite_start]**Language:** TypeScript [cite: 48]
* [cite_start]**Styling:** Tailwind CSS [cite: 49]
* [cite_start]**State Management:** React Hooks (`useState`, `useEffect`) [cite: 27]
* [cite_start]**Persistence:** Browser LocalStorage [cite: 27, 39]

---

## 💡 My Approach
[cite_start]My primary goal was to balance **speed** with **maintainability**[cite: 4, 84]. [cite_start]I followed a modular architecture to ensure the UI remained scalable and easy to debug[cite: 51, 54].

1.  [cite_start]**Data Modeling:** Defined strict TypeScript interfaces for `Doctor` and `Appointment` to prevent runtime errors and ensure data consistency[cite: 48, 60].
2.  [cite_start]**Stateful UI:** Utilized a centralized Modal system for booking to provide a seamless, single-page feel without unnecessary page transitions[cite: 5, 85].
3.  [cite_start]**Progressive Disclosure:** Designed the booking form to reveal time slots only after a date is selected, reducing cognitive load for the user[cite: 57, 85].

---

## 🧠 Key Decisions Made

### 1. Client-Side Persistence
[cite_start]Instead of a complex backend, I chose **LocalStorage** to meet the requirement for data persistence after page refreshes[cite: 27, 39]. This allowed for a zero-latency experience while fulfilling the assessment's core criteria.

### 2. Design System & UX
[cite_start]I moved away from generic AI-generated patterns to create a bespoke healthcare aesthetic[cite: 86].
* [cite_start]**Visual Hierarchy:** Used specific `rounded-[24px]` corners and custom blue accents (`#1D61FF`) to create a soft, professional feel[cite: 56, 85].
* [cite_start]**Validation:** Implemented checks to prevent double-booking the same doctor at the same time[cite: 26, 43].
* [cite_start]**Empty States:** Designed a custom "No Appointments" view to guide new users back to the doctor list[cite: 44].

### 3. Responsive Strategy
[cite_start]The app uses a mobile-first grid system. [cite_start]On small screens, the layout shifts from a multi-column grid to a single-column stack to maintain readability and touch-target size[cite: 41, 74].

---

## 🚧 Challenges Faced

### ⚡ Next.js Hydration
[cite_start]One of the main challenges was accessing `localStorage` in Next.js[cite: 27]. Since the server renders the page first, it doesn't have access to browser storage. I solved this by wrapping the data retrieval inside a `useEffect` hook, ensuring the code only runs on the client side after the initial mount.

### ⚡ Form Interaction Logic
[cite_start]Coordinating the state between the date picker and the time-slot "pills" required careful state management[cite: 20]. I implemented logic to ensure that changing a date would reset any previously selected time slots to prevent inconsistent form submissions.

---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [your-repo-link]

2. **Install dependencies:**
npm install

3. **Run the development server:**
npm run dev

4. **Build for production:**
npm run build


✅ **Feature Checklist**
[x] Doctors Listing (at least 5 doctors) 
[x] Responsive Design (Mobile + Desktop) 
[x] Interactive Booking Modal 
[x] Date & Time Selection 
[x] Appointment Dashboard 
[x] Cancel/Delete Appointments 
[x] Data Persistence 
   
