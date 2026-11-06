import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessSolutions } from "@/content/home";
import { solutionImages } from "@/content/media";
import { cn } from "@/lib/cn";

/** Backdrop for each card's image area until its photo is added. */
const gradients = [
  "from-brand-600 via-brand-400 to-accent-cyan",
  "from-amber-400 via-orange-400 to-rose-500",
  "from-emerald-500 via-teal-400 to-cyan-400",
  "from-indigo-600 via-brand-500 to-sky-400",
  "from-accent-violet via-purple-500 to-fuchsia-500",
  "from-cyan-500 via-brand-500 to-accent-violet",
];

type Solution = (typeof businessSolutions)[number];

/** Illustrated stand-in for a solution photo: its icon floating over a gradient with rings. */
function SolutionArt({ solution, gradient }: { solution: Solution; gradient: string }) {
  const Icon = solution.icon;
  return (
    <div aria-hidden className={cn("absolute inset-0 bg-linear-to-br", gradient)}>
      <div className="bg-grid absolute inset-0 opacity-60 [--theme-grid-line:rgb(255_255_255/0.14)]" />
      <div className="absolute top-1/2 left-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-1/2 left-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl bg-white shadow-2xl shadow-ink-950/30 transition-transform duration-700 group-hover:-translate-y-[60%] group-hover:rotate-6">
        <Icon className="size-9 text-ink-900" />
      </div>
    </div>
  );
}

/** "Platforms that run real operations": the six business solutions in a 3×2 grid with imagery. */
export function SolutionsGrid() {
  return (
    <Section>
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Business solutions"
          title={
            <>
              Platforms that run <span className="text-gradient">real operations</span>
            </>
          }
          description="Ready-to-shape business platforms, built around your users, workflows, data, integrations and reporting needs."
        />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution, index) => (
            <Reveal as="li" key={solution.title} delay={(index % 3) * 0.08}>
              <article className="group h-full overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/15 dark:bg-surface/60">
                <MediaFrame
                  image={solutionImages[solution.title] ?? { alt: "" }}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="m-3 aspect-[16/10] rounded-[1.5rem]"
                  fallback={<SolutionArt solution={solution} gradient={gradients[index % gradients.length]} />}
                />
                <div className="px-7 pt-3 pb-8">
                  <p className="font-display text-sm text-subtle">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{solution.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{solution.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
