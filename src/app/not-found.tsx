import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-6 py-32">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow justify-center">Page not found</p>
        <h1 className="mt-4 font-serif text-6xl text-navy">404</h1>
        <p className="mt-4 leading-relaxed text-charcoal-light">
          The page you are looking for has changed its tune. Let&apos;s get you
          back to the music.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" size="lg">
            Return home
          </Button>
        </div>
        <p className="mt-6 text-sm text-charcoal-muted">
          Or explore our{" "}
          <Link href="/volunteer" className="text-navy underline underline-offset-4">
            volunteer program
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
