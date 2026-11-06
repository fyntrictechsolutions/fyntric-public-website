import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { developmentProcess } from "@/content/home";

/** Always rendered in the dark palette: a deep band that gives the light page rhythm and depth. */
export function ProcessSection() {
  return (
    <Section
      data-theme="dark"
      className="noise relative isolate mx-3 overflow-hidden rounded-[2.5rem] bg-background text-body sm:mx-6"
    >
      <AmbientBackground />
      <Container className="relative max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title={
            <>
              Our Development <span className="text-gradient">Process</span>
            </>
          }
          description="A clear, collaborative path from first conversation to a product that keeps improving."
        />
        <ProcessTimeline steps={developmentProcess} />
      </Container>
    </Section>
  );
}
