// lib/siteData.js
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  UserRoundCheck,

  // ✅ Service icons (new)
  Brain,
  Bone,
  Ear,
  Baby,
  Stethoscope,
  Eye,
  Ribbon,
  GraduationCap,
  Sparkles,
  Activity,
  Pill,
  FlaskConical,
} from "lucide-react"

export const CONTACT = {
  phone: "+91 96566 10108",
  whatsapp: "+91 96566 10108",
  email: "info@minshospital.com",
}

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/" },
  { label: "Offers", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/" },
]

export const TRUST_CHIPS = [
  { icon: ShieldCheck, text: "Verified Staff" },
  { icon: Clock, text: "Same-day Visits" },
  { icon: BadgeCheck, text: "24/7 Support" },
  { icon: UserRoundCheck, text: "Care Coordinator" },
]

// ✅ Updated to match the services in the image
export const SERVICES = [
  {
    icon: Brain,
    title: "Neuromedicine",
    desc: "Diagnosis and care for brain, nerve, and spine-related conditions.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    desc: "Treatment for bones, joints, injuries, back pain, and mobility issues.",
  },
  {
    icon: Ear,
    title: "ENT",
    desc: "Care for ear, nose, and throat problems including infections and allergies.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Complete healthcare for children including fever care and routine checkups.",
  },
  {
    icon: Stethoscope,
    title: "Pulmonology",
    desc: "Respiratory care for asthma, COPD, chronic cough, and breathing issues.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    desc: "Eye examinations and treatment for vision concerns and eye infections.",
  },
  {
    icon: Ribbon,
    title: "Oncology",
    desc: "Cancer care support, consultations, follow-ups, and coordinated guidance.",
  },
  {
    icon: GraduationCap,
    title: "Child Development",
    desc: "Support for speech, learning, behavior, and developmental milestones.",
  },
  {
    icon: Sparkles,
    title: "Mind Health",
    desc: "Counseling and support for stress, anxiety, depression, and wellness.",
  },
  {
    icon: Activity,
    title: "Physio Therapy",
    desc: "Rehab programs for pain relief, recovery, posture, and strength building.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    desc: "Prescription support and medicine guidance for safe and correct usage.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory",
    desc: "Lab testing support including sample collection and fast reporting.",
  },
]

export const PACKAGES = [
  {
    title: "Basic Home Care",
    priceHint: "From ₹999/day",
    bullets: ["Daily vitals check", "Medication reminders", "Care coordinator support"],
    badge: "Popular",
  },
  {
    title: "Recovery Program",
    priceHint: "Custom pricing",
    bullets: ["Wound dressing / IV support", "Physio sessions", "Progress tracking reports"],
  },
  {
    title: "Elderly Support",
    priceHint: "From ₹1499/day",
    bullets: ["Daily assistance", "Chronic care monitoring", "Family updates"],
  },
]

export const DIFFERENTIATORS = [
  { title: "Clinical protocols", desc: "Standardized checklists & safety steps every visit." },
  { title: "Verified professionals", desc: "Background-checked staff with credential review." },
  { title: "Care coordinator", desc: "One point of contact to manage your plan." },
  { title: "Fast scheduling", desc: "Same-day visits in many areas (subject to availability)." },
  { title: "Transparent updates", desc: "Visit notes shared with family (on request)." },
  { title: "Patient-first support", desc: "24/7 helpline for urgent care guidance." },
]

export const STATS = [
  { label: "Patients served", value: "12k+" },
  { label: "Caregivers", value: "300+" },
  { label: "Years", value: "8+" },
  { label: "Cities", value: "6" },
]

export const TESTIMONIALS = [
  {
    name: "Fathima",
    city: "Kochi",
    service: "Nursing Care",
    quote: "The nurse was professional and kind. Super smooth scheduling and follow-ups.",
  },
  {
    name: "Arjun",
    city: "Calicut",
    service: "Doctor Visit",
    quote: "Doctor arrived on time and explained everything clearly. Great experience.",
  },
  {
    name: "Naseema",
    city: "Trivandrum",
    service: "Elderly Care",
    quote: "The care coordinator kept us updated daily. My father feels much safer now.",
  },
]

export const BLOG_POSTS = [
  {
    title: "5 signs your fever needs a doctor visit",
    excerpt: "Know when home remedies aren’t enough and professional care is needed.",
    href: "/blog/fever-when-to-see-doctor",
    date: "Mar 1, 2026",
  },
  {
    title: "Wound care basics: do’s and don’ts",
    excerpt: "Simple steps to prevent infection and support faster healing.",
    href: "/blog/wound-care-basics",
    date: "Feb 20, 2026",
  },
  {
    title: "Managing diabetes at home: a practical checklist",
    excerpt: "Daily habits that keep your sugar stable and reduce complications.",
    href: "/blog/diabetes-home-checklist",
    date: "Feb 10, 2026",
  },
]