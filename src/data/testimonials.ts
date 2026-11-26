export interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  initials: string;
  rating: number; // 1–5
}


export const testimonials: Testimonial[] = [
  {
    quote:
      "Cybersnitch assisted my girlfriend with finding her iPhone after it was missing for 8 months. Would recommend :).",
    name: "Sibahle Ph Mnisi",
    position: "Student",
    company: "Durban University of Technology",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "These gyz are the best. I left my phone in a taxi and they tracked the location in 2 days in Pretoria. Very caring & helpful ppl shame.",
    name: "Lerato Molefe",
    position: "Cashier",
    company: "East Rand",
    initials: "LM",
    rating: 5,
  },
  {
    quote:
      "Tracking my laptop last week was less stressful thanks to these folks. Turned out it was my friend who took it. After she helped me look for my laptop the whole res kanti its with her.",
    name: "Zusiphe",
    position: "Intern",
    company: "Khaya Cash Loans",
    initials: "Z",
    rating: 4,
  },
];
