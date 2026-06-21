export const user = {
  name: "Aarav Sharma",
  email: "aarav@example.com",
  initials: "AS",
  age: 32,
};

export const healthScore = {
  score: 82,
  contributors: [
    { label: "Sleep", value: 78, note: "7h 12m avg this week" },
    { label: "Exercise", value: 65, note: "4 of 5 workouts done" },
    { label: "Hydration", value: 90, note: "On track today" },
    { label: "Stress", value: 70, note: "Lower than last week" },
    { label: "Diet", value: 75, note: "Balanced meals logged" },
  ],
};

export const appointments = [
  { id: "1", doctor: "Dr. Meera Patel", specialty: "Cardiologist", date: "Tue, Jun 24", time: "10:30 AM", mode: "In-clinic" },
  { id: "2", doctor: "Dr. Rohit Verma", specialty: "Dermatologist", date: "Fri, Jun 27", time: "4:00 PM", mode: "Video" },
  { id: "3", doctor: "Dr. Sneha Iyer", specialty: "General Physician", date: "Mon, Jul 1", time: "9:00 AM", mode: "In-clinic" },
];

export const medications = [
  { id: "1", name: "Metformin", dosage: "500 mg", schedule: ["Morning", "Evening"], next: "8:00 PM", refill: "Jul 12", reminder: true },
  { id: "2", name: "Atorvastatin", dosage: "10 mg", schedule: ["Night"], next: "10:00 PM", refill: "Jul 20", reminder: true },
  { id: "3", name: "Vitamin D3", dosage: "60,000 IU", schedule: ["Weekly"], next: "Sun 9:00 AM", refill: "Aug 5", reminder: false },
  { id: "4", name: "Cetirizine", dosage: "10 mg", schedule: ["As needed"], next: "—", refill: "Jul 30", reminder: false },
];

export const recentSymptoms = [
  { id: "1", label: "Mild headache", when: "2h ago", severity: "Low" },
  { id: "2", label: "Sore throat", when: "Yesterday", severity: "Medium" },
  { id: "3", label: "Back stiffness", when: "2 days ago", severity: "Low" },
];

export const sleepWeek = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.2 },
  { day: "Wed", hours: 6.8 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 7.0 },
  { day: "Sat", hours: 8.1 },
  { day: "Sun", hours: 7.4 },
];

export const insights = [
  { id: "1", title: "Sleep quality improved", body: "You averaged 7.3 hours this week — up 12% from last week.", tone: "positive" as const },
  { id: "2", title: "Missed medication reminders", body: "You missed 2 Metformin doses in the past 3 days.", tone: "warning" as const },
  { id: "3", title: "Hydration on track", body: "You hit your water goal 5 out of 7 days.", tone: "positive" as const },
];

export const chatConversations = [
  { id: "c1", title: "Headache and fever", updated: "Today" },
  { id: "c2", title: "Blood test report", updated: "Yesterday" },
  { id: "c3", title: "Back pain exercises", updated: "Mon" },
  { id: "c4", title: "Diet for diabetes", updated: "Jun 14" },
];

export const chatMessages = [
  { id: "m1", role: "assistant" as const, text: "Hi Aarav, I'm HealthMate. How are you feeling today?", time: "9:02 AM" },
  { id: "m2", role: "user" as const, text: "I have a mild headache and slight fever since morning.", time: "9:03 AM" },
  { id: "m3", role: "assistant" as const, text: "I'm sorry to hear that. A few quick questions:\n\n• How high is your temperature?\n• Any other symptoms like cough, body ache, or nausea?\n• Have you taken any medication?", time: "9:03 AM" },
  { id: "m4", role: "user" as const, text: "Temperature is around 99.6°F. Just a dull headache, no cough.", time: "9:05 AM" },
  { id: "m5", role: "assistant" as const, text: "Thanks. This sounds like a mild viral episode. I recommend rest, hydration, and a paracetamol 500 mg if discomfort persists. Monitor your temperature every 4 hours. If fever crosses 101°F or symptoms worsen in 48 hours, please consult a doctor.", time: "9:06 AM" },
];

export const records = {
  history: [
    { id: "h1", title: "Hypertension diagnosis", date: "Mar 2023", doctor: "Dr. Meera Patel" },
    { id: "h2", title: "Appendectomy", date: "Aug 2019", doctor: "Apollo Hospital" },
  ],
  prescriptions: [
    { id: "p1", title: "Metformin 500 mg", date: "Jun 10, 2026", doctor: "Dr. Sneha Iyer" },
    { id: "p2", title: "Atorvastatin 10 mg", date: "May 22, 2026", doctor: "Dr. Meera Patel" },
  ],
  labs: [
    { id: "l1", title: "Complete Blood Count", date: "Jun 12, 2026", status: "Normal" },
    { id: "l2", title: "HbA1c", date: "Jun 12, 2026", status: "Borderline" },
    { id: "l3", title: "Lipid Profile", date: "May 28, 2026", status: "Normal" },
  ],
  allergies: [
    { id: "a1", title: "Penicillin", severity: "High" },
    { id: "a2", title: "Dust mites", severity: "Low" },
  ],
  vaccinations: [
    { id: "v1", title: "COVID-19 booster", date: "Feb 2024" },
    { id: "v2", title: "Influenza", date: "Oct 2023" },
    { id: "v3", title: "Tetanus", date: "Jul 2021" },
  ],
};

export const reportsWeekly = [
  { day: "Mon", steps: 6400, calories: 1980, sleep: 6.5 },
  { day: "Tue", steps: 8200, calories: 2050, sleep: 7.2 },
  { day: "Wed", steps: 5400, calories: 2100, sleep: 6.8 },
  { day: "Thu", steps: 9100, calories: 2200, sleep: 7.5 },
  { day: "Fri", steps: 7800, calories: 1950, sleep: 7.0 },
  { day: "Sat", steps: 11200, calories: 2300, sleep: 8.1 },
  { day: "Sun", steps: 6900, calories: 2080, sleep: 7.4 },
];

export const family = [
  { id: "f1", name: "Priya Sharma", relation: "Spouse", age: 30, initials: "PS" },
  { id: "f2", name: "Ishaan Sharma", relation: "Son", age: 6, initials: "IS" },
  { id: "f3", name: "Ramesh Sharma", relation: "Father", age: 62, initials: "RS" },
];

export const timeline = [
  { id: "t1", date: "Jun 18, 2026", type: "Symptom", title: "Logged mild headache", body: "Resolved within a day." },
  { id: "t2", date: "Jun 12, 2026", type: "Report", title: "Lab results: HbA1c borderline", body: "Discussed with Dr. Iyer." },
  { id: "t3", date: "Jun 8, 2026", type: "Appointment", title: "Cardiology follow-up", body: "BP stable at 124/82." },
  { id: "t4", date: "May 28, 2026", type: "Recovery", title: "Completed 14-day antibiotic course", body: "Sinus infection cleared." },
  { id: "t5", date: "May 14, 2026", type: "Appointment", title: "Annual physical", body: "Overall health good." },
];

export const suggestedPrompts = [
  "I have a headache and fever.",
  "Explain my blood test report.",
  "Suggest exercises for back pain.",
  "What medicines am I currently taking?",
];