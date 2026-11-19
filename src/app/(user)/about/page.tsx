import Link from "next/link";
import { Statement } from "@/components/sections/home/Statement";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { siteConfig } from "@/config/site";
import { aboutCta, aboutIntro, aboutPillars, aboutSeo } from "@/content/about";
import { getServicePath, services } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({ ...aboutSeo, path: "/about/" });

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={aboutIntro.heading}
        description={aboutIntro.text}
        breadcrumbs={[{ label: "About", href: "/about/" }]}
      >
        <ButtonLink href="/contact/" size="lg" withArrow>
          {aboutCta}
        </ButtonLink>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <h2 className="sr-only">Mission, vision, approach and expertise</h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {aboutPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal as="li" key={pillar.title} delay={(index % 2) * 0.1}>
                  <SpotlightCard className="h-full p-10">
                    <div className="flex items-center gap-4">
                      <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-accent-violet text-white shadow-[0_10px_40px_-10px] shadow-brand-500/70">
                        <Icon aria-hidden className="size-6" />
                      </span>
                      <h3 className="text-2xl font-semibold">{pillar.title}</h3>
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-body">{pillar.text}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Statement />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Our expertise"
            title={
              <>
                One partner for your <span className="text-gradient">entire digital stack</span>
              </>
            }
            description="Web, mobile, cloud, CRM, SaaS, AI automation, blockchain and e-commerce, delivered by one accountable team."
          />
          <ul className="mt-12 flex flex-wrap gap-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 0.03}>
                <Link
                  href={getServicePath(service.slug)}
                  className="glass inline-flex items-center gap-3 rounded-full px-5 py-3 font-medium text-foreground transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/15"
                >
                  <service.icon aria-hidden className="size-4 text-accent" />
                  {service.name}
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <WhyChooseUs />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Where we work"
            title={
              <>
                Serving businesses across <span className="text-gradient">India, the GCC</span> and beyond
              </>
            }
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {siteConfig.markets.map((market, index) => (
              <Reveal as="li" key={market} delay={index * 0.06}>
                <div className="glass rounded-2xl px-6 py-8 text-center font-display text-xl font-semibold text-foreground">{market}</div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBanner
        heading="Let's talk about what you want to build"
        text="Share your idea or business challenge and our team will help you define the right technology approach."
        buttonLabel={aboutCta}
      />
    </>
  );
}
