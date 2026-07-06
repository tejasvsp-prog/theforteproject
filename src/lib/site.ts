/**
 * Central site configuration and copy.
 *
 * Everything here is authentic — based only on what the organization has
 * confirmed. No invented statistics, dates, names, testimonials, or claims.
 *
 * Forms: every sign-up points at a Tally interest form. The `embedUrl` is the
 * Tally "embed" link (tally.so/embed/…); `shareUrl` is the public link
 * (tally.so/r/…) used by plain CTA buttons. Empty strings fall back to a
 * placeholder, so the site never breaks before a form exists.
 */

export const siteConfig = {
  name: "The Forte Project",
  shortName: "Forte",
  tagline: "Free music lessons, taught by students",
  location: "Okemos, Michigan",
  description:
    "The Forte Project is an independent, student-run initiative from Okemos, Michigan offering free, virtual music lessons to K–12 students who can't afford private instruction.",
  url: "https://theforteproject.us",
  email: "theforteproject.mi@gmail.com",
  social: {
    instagram: "https://www.instagram.com/theforteproject/",
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
      "You already play and want to get better. A volunteer teacher helps you grow — free.",
  },
  {
    id: "theory",
    label: "No instrument",
    title: "Theory & composition",
    blurb:
      "No instrument yet? Learn how music works — reading it, hearing it, writing your own.",
  },
] as const;

/** How signing up actually works. */
export const steps = [
  {
    n: "01",
    title: "Fill out the form",
    body: "Takes about a minute.",
  },
  {
    n: "02",
    title: "A teacher reaches out",
    body: "We find a time that works.",
  },
  {
    n: "03",
    title: "Start learning",
    body: "30 minutes, twice a month, on video.",
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
    a: "Nothing. Ever.",
  },
  {
    q: "Who is this for?",
    a: "Anyone K–12 can sign up — but we built this for students who can't afford lessons, not for those who can, or who are already advanced. If you're not sure, just ask.",
  },
  {
    q: "Do I need my own instrument?",
    a: "For instrument lessons, yes. Without one, sign up for theory & composition instead.",
  },
  {
    q: "Who teaches?",
    a: "High school students — every teacher is at least a sophomore and plays in their school's highest ensemble.",
  },
  {
    q: "Can I join from outside Michigan?",
    a: "Yes. Lessons are virtual, so any K–12 student can sign up.",
  },
] as const;

export type FormKey = "student" | "volunteer" | "contact";

export interface FormConfig {
  label: string;
  /** Tally embed URL (tally.so/embed/…). Empty = placeholder. */
  embedUrl: string;
  /** Public shareable link (tally.so/r/…) used by plain CTA buttons. */
  shareUrl: string;
}

const tallyParams = "alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export const forms: Record<FormKey, FormConfig> = {
  student: {
    label: "Student interest form",
    embedUrl: `https://tally.so/embed/0Q5ELZ?${tallyParams}`,
    shareUrl: "https://tally.so/r/0Q5ELZ",
  },
  volunteer: {
    label: "Volunteer interest form",
    embedUrl: `https://tally.so/embed/RGlzJp?${tallyParams}`,
    shareUrl: "https://tally.so/r/RGlzJp",
  },
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
  { href: "/apply", label: "Sign up" },
  { href: "/contact", label: "Contact" },
] as const;
