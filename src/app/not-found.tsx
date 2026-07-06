import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32">
      <div className="wrap">
        <p className="t-kicker text-navy">Page not found</p>
        <p className="t-numeral mt-6">404</p>
        <h1 className="t-h2 mt-6 max-w-[20ch]">
          This page has changed its tune.
        </h1>
        <p className="t-lead mt-6 max-w-prose text-ink/75">
          The page you are looking for isn&apos;t here. Let&apos;s get you back
          to the music.
        </p>
        <div className="mt-10">
          <Button href="/">
            Return home <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
