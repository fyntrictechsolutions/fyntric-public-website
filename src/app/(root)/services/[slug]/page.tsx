import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CapabilitiesGrid } from "@/components/sections/services/CapabilitiesGrid";
import { ProcessSteps } from "@/components/sections/services/ProcessSteps";
import { ServiceCard } from "@/components/sections/services/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { whyChooseUs } from "@/content/home";
import {
  getServiceBySlug,
  getServicePath,
  serviceProcess,
  services,
  serviceWhyChooseUs,
} from "@/content/services";
import { absoluteUrl, buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({ ...service.seo, path: getServicePath(service.slug) });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = service.related
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((related) => related !== undefined);

  return (
    <>
      <PageHero
        eyebrow={service.name}
        title={service.heading}
        description={service.hero}
        breadcrumbs={[
          { label: "Services", href: "/services/" },
          { label: service.name, href: getServicePath(service.slug) },
        ]}
      >
        <ButtonLink href="/contact/" size="lg" withArrow>
          {service.cta}
        </ButtonLink>
        <ButtonLink href="/services/" size="lg" variant="secondary">
          All services
        </ButtonLink>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                What we deliver in <span className="text-gradient">{service.name}</span>
              </>
            }
          />
          <CapabilitiesGrid capabilities={service.capabilities} />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Why choose Fyntric Tech" title={serviceWhyChooseUs} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.title} delay={index * 0.07}>
                  <div className="glass h-full rounded-3xl p-6">
                    <Icon aria-hidden className="size-6 text-highlight" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Development process"
            title={
              <>
                From discovery to <span className="text-gradient">ongoing support</span>
              </>
            }
          />
          <ProcessSteps steps={serviceProcess} />
        </Container>
      </Section>

      <FaqSection faqs={service.faqs} />

      {relatedServices.length > 0 && (
        <Section>
          <Container>
            <SectionHeading eyebrow="Related services" title="Explore related services" />
            <ul className="mt-14 grid gap-5 md:grid-cols-3">
              {relatedServices.map((related, index) => (
                <Reveal as="li" key={related.slug} delay={index * 0.07}>
                  <ServiceCard service={related} showCapabilities={false} />
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <CtaBanner
        heading={service.cta}
        text="Tell us what you need and our team can recommend an appropriate technology approach."
        buttonLabel="Get Free Consultation"
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.seo.description,
          url: absoluteUrl(getServicePath(service.slug)),
          provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
          areaServed: siteConfig.markets,
        }}
      />
    </>
  );
}
