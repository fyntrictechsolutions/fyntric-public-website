import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies } from "@/content/home";

type Technology = (typeof technologies)[number];

function TechPill({ technology }: { technology: Technology }) {
  return (
    <span className="glass flex items-center gap-4 rounded-full py-3 pr-7 pl-3 font-display text-xl font-medium whitespace-nowrap text-foreground sm:text-2xl">
      {/* A white disc keeps every brand's own colours readable in both themes. */}
      <span className="grid size-12 place-items-center rounded-full bg-white shadow-sm ring-1 ring-ink-950/5 sm:size-14">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static SVGs, no optimisation needed */}
        <img src={technology.logo} alt="" width={32} height={32} loading="lazy" className="size-7 object-contain sm:size-8" />
      </span>
      {technology.name}
    </span>
  );
}

export function TechStack() {
  const half = Math.ceil(technologies.length / 2);

  return (
    <section aria-labelledby="tech-heading" className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Technologies"
          title={<span id="tech-heading">Built on a modern, proven stack</span>}
          description="We choose the right tools for each product, from Next.js and Flutter to cloud infrastructure and commerce platforms."
        />
      </Container>
      <div className="mt-16 space-y-4">
        <Marquee duration={35}>
          {technologies.slice(0, half).map((technology) => (
            <TechPill key={technology.name} technology={technology} />
          ))}
          {technologies.slice(0, half).map((technology) => (
            <TechPill key={`${technology.name}-repeat`} technology={technology} />
          ))}
        </Marquee>
        <Marquee duration={35} reverse>
          {technologies.slice(half).map((technology) => (
            <TechPill key={technology.name} technology={technology} />
          ))}
          {technologies.slice(half).map((technology) => (
            <TechPill key={`${technology.name}-repeat`} technology={technology} />
          ))}
        </Marquee>
      </div>
      <p className="sr-only">Technologies: {technologies.map((technology) => technology.name).join(", ")}.</p>
    </section>
  );
}
