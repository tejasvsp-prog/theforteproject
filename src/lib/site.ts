/**
 * Central site configuration and copy.
 *
 * Everything here is authentic — based only on what the organization has
 * confirmed. No invented statistics, dates, names, testimonials, or claims.
 *
 * Forms: every sign-up points at an interest form. Paste a real Google Form
 * "embed" URL into `embedUrl` (and the shareable link into `shareUrl`) below
 * and the whole site updates — no component changes needed.
 */

export const siteConfig = {
  name: "The Forte Project",
  shortName: "Forte",
  tagline: "Free music lessons, taught by students",
  location: "Okemos, Michigan",
  description:
    "The Forte Project is an independent, student-run initiative from Okemos, Michigan offering free, virtual music lessons to K–12 students who can't afford private instruction.",
  url: "https://theforteproject.org",
  // No public email or social accounts yet — leave blank so nothing fake shows.
  email: "",
  social: {
    instagram: "",
    youtube: "",
    linkedin: "",
  },
} as const;

/** The two ways a student can learn — both free, both virtual. */
export const tracks = [
  {
    id: "instrument",
    label: "Have an instrument",
    title: "Instrument lessons",
    blurb:
      "You already play, and you want to get better — but private lessons aren't something your family can afford. A volunteer teacher helps you keep growing, for free.",
  },
  {
    id: "theory",
    label: "No instrument",
    title: "Theory & composition",
    blurb:
      "You don't have an instrument, but you're curious about music. Learn how music actually works — reading it, understanding it, and writing your own.",
  },
] as const;

/** How signing up actually works. */
export const steps = [
  {
    n: "01",
    title: "Fill out the interest form",
    body: "Tell us who you are and what you'd like to learn. It only takes a minute.",
  },
  {
    n: "02",
    title: "A teacher reaches out",
    body: "One of our volunteer teachers gets in touch to find a time that works for you.",
  },
  {
    n: "03",
    title: "Start learning",
    body: "Meet for free, 30-minute virtual lessons, twice a month.",
  },
] as const;

/** Honest eligibility — who this is (and isn't) for. */
export const eligibility = {
  forItems: [
    "You're a K–12 student.",
    "Private music lessons aren't something you can afford.",
    "You want to learn — whether you already play or you're starting with theory.",
  ],
  notItems: [
    "You can already afford private instruction.",
    "You're already an advanced or accomplished musician.",
  ],
} as const;

/** What we ask of volunteer teachers. */
export const volunteerReqs = [
  {
    title: "A sophomore or older",
    body: "You're in at least your sophomore year of high school.",
  },
  {
    title: "Top of your program",
    body: "You're a member of your school's highest ensemble.",
  },
] as const;

/** What's next for the project. */
export const roadmap = [
  "In-person lessons",
  "Group workshops",
  "Community events",
] as const;

/** FAQ — every answer is drawn only from confirmed facts. */
export const faqs = [
  {
    q: "How much does it cost?",
    a: "Nothing. Every lesson is completely free.",
  },
  {
    q: "Who is this for?",
    a: "Any K–12 student who can't afford music lessons. It isn't meant for students who can already pay for private instruction, or who are already advanced musicians — we want to reach the students who'd otherwise go without.",
  },
  {
    q: "Do I need my own instrument?",
    a: "For instrument lessons, yes — those are for students who already have an instrument and want to improve. If you don't have one, you can sign up for theory & composition instead.",
  },
  {
    q: "How often are lessons, and how long?",
    a: "Lessons are 30 minutes long, twice a month, and fully virtual.",
  },
  {
    q: "Who teaches the lessons?",
    a: "High school student volunteers. Every teacher is at least a sophomore and a member of their school's highest ensemble.",
  },
  {
    q: "Can I join from outside Michigan?",
    a: "We started in Okemos, Michigan. Because lessons are virtual, any K–12 student can sign up.",
  },
  {
    q: "How do I get started?",
    a: "Fill out the interest form and a volunteer teacher will reach out to schedule your lessons.",
  },
] as const;

export type FormKey = "student" | "volunteer" | "contact";

export interface FormConfig {
  label: string;
  /** iframe embed URL from the Google Form "embed" tab. Empty = placeholder. */
  embedUrl: string;
  /** Public shareable link used by CTA buttons. Empty = placeholder. */
  shareUrl: string;
}

export const forms: Record<FormKey, FormConfig> = {
  student: { label: "Student interest form", embedUrl: "", shareUrl: "" },
  volunteer: { label: "Volunteer interest form", embedUrl: "", shareUrl: "" },
  contact: { label: "Contact form", embedUrl: "", shareUrl: "" },
};

/** Primary links shown in the center of the navbar (logo covers Home). */
export const nav = [
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
] as const;

/** Full link list for the footer. */
export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/apply", label: "Sign up for lessons" },
  { href: "/contact", label: "Contact" },
] as const;
