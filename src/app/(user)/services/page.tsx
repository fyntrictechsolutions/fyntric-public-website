import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ServiceShowcase } from "@/components/sections/services/ServiceShowcase";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { primaryCta } from "@/config/site";
import { businessSolutions, developmentProcess, finalCta } from "@/content/home";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Software Development Services | Web, Mobile, CRM, SaaS & AI | Fyntric Tech",
  description:
    "Explore Fyntric Tech services: web and mobile app development, Shopify, WordPress, e-commerce, custom software, CRM, SaaS, AI automation, blockchain and digital marketing.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Technology Services That Move Your Business Forward"
        description="Websites, mobile apps, CRM platforms, SaaS products, AI automation and blockchain solutions, designed and built around how your business works."
        breadcrumbs={[{ label: "Services", href: "/services/" }]}
      >
        <ButtonLink href={primaryCta.href} size="lg" withArrow>
          {primaryCta.label}
        </ButtonLink>
      </PageHero>

      <ServiceShowcase services={services} />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Business solutions"
            title={
              <>
                Ready-to-shape <span className="text-gradient">business platforms</span>
              </>
            }
            description="Built on our services, these platforms are tailored to your users, workflows, data and reporting needs."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Reveal as="li" key={solution.title} delay={(index % 3) * 0.07}>
                  <div className="glass flex h-full gap-5 rounded-3xl p-7">
                    <Icon aria-hidden className="size-7 shrink-0 text-highlight" />
                    <div>
                      <h3 className="text-lg font-semibold">{solution.title}</h3>
                      <p className="mt-2 text-muted">{solution.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section className="overflow-hidden">
        <Container className="max-w-5xl">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title={
              <>
                Our Development <span className="text-gradient">Process</span>
              </>
            }
          />
          <ProcessTimeline steps={developmentProcess} />
        </Container>
      </Section>

      <CtaBanner heading={finalCta.heading} text={finalCta.text} buttonLabel={finalCta.button} />
    </>
  );
}
