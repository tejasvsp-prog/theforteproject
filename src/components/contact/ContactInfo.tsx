import Link from "next/link";

const routes = [
  {
    label: "Want lessons?",
    body: "Fill out the student interest form and a teacher will reach out.",
    href: "/apply",
    cta: "Sign up for lessons",
  },
  {
    label: "Want to teach?",
    body: "If you're a sophomore or older in your school's top ensemble, we'd love your help.",
    href: "/volunteer",
    cta: "Volunteer",
  },
];

/** Honest "how to reach us" — we route people to the right form. */
export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {routes.map((r) => (
        <div key={r.href} className="border-t hairline pt-6">
          <p className="t-kicker text-accent">{r.label}</p>
          <p className="t-body mt-3 max-w-sm text-ink/75">{r.body}</p>
          <Link
            href={r.href}
            className="group mt-4 inline-flex items-center gap-2 t-button text-ink"
          >
            {r.cta}
            <span
              aria-hidden
              className="text-accent transition-transform duration-300 ease-signal group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      ))}
      <p className="t-caption max-w-sm text-ink/55">
        Have a different question? Leave it on the form and we&apos;ll get back
        to you.
      </p>
    </div>
  );
}
