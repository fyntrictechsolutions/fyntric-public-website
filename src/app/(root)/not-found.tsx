import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden py-32 text-center">
      <AmbientBackground />
      <Container className="relative">
        <p className="text-gradient font-display text-8xl font-semibold sm:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl">This page could not be found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page may have moved. Let&apos;s get you back on track.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg" withArrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact/" size="lg" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
