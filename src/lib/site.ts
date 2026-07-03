/**
 * Central site configuration.
 *
 * ─────────────────────────────────────────────────────────────
 *  Replacing the placeholder Google Forms
 * ─────────────────────────────────────────────────────────────
 *  Every form on the site is driven by the `forms` object below.
 *  To connect a real Google Form:
 *    1. Open your Google Form → "Send" → the `<>` (embed) tab.
 *    2. Copy the URL inside the iframe `src="..."` attribute.
 *    3. Paste it as the `embedUrl` for the relevant form.
 *    4. Paste the normal shareable link as `shareUrl` (used by buttons).
 *  No component changes are required — the whole site updates.
 */

export const siteConfig = {
  name: "The Forte Project",
  shortName: "Forte",
  tagline: "Music Education Without Borders",
  description:
    "The Forte Project connects talented high school musicians with underprivileged youth around the world through free virtual music education.",
  url: "https://theforteproject.org",
  email: "hello@theforteproject.org",
  social: {
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
} as const;

export type FormKey = "volunteer" | "performance" | "theory" | "contact";

export interface FormConfig {
  /** Human label for the form. */
  label: string;
  /** iframe embed URL from the Google Form "embed" tab. Empty = placeholder. */
  embedUrl: string;
  /** Public shareable link used by CTA buttons. Empty = placeholder. */
  shareUrl: string;
}

export const forms: Record<FormKey, FormConfig> = {
  volunteer: {
    label: "Volunteer Application",
    embedUrl: "",
    shareUrl: "",
  },
  performance: {
    label: "Performance Lessons Application",
    embedUrl: "",
    shareUrl: "",
  },
  theory: {
    label: "Music Theory & Composition Application",
    embedUrl: "",
    shareUrl: "",
  },
  contact: {
    label: "Contact Form",
    embedUrl: "",
    shareUrl: "",
  },
};

/** Primary links shown in the center of the navbar (logo covers Home). */
export const nav = [
  { href: "/about", label: "About Us" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/apply", label: "Enroll" },
] as const;

/** Full link list for the footer, including Home and Contact. */
export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/apply", label: "Enroll" },
  { href: "/contact", label: "Contact Us" },
] as const;
