import { CalendarCheck, Globe2, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { PageHero } from "@/components/sections/shared/PageHero";
import { buttonClassName } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contactConfig, siteConfig } from "@/config/site";
import { contactCtas, contactIntro, contactSeo } from "@/content/contact";
import { cn } from "@/lib/cn";
import { buildMetadata } from "@/lib/metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({ ...contactSeo, path: "/contact/" });

const nextSteps = [
  "We review your enquiry and reply on your preferred channel.",
  "A free consultation to understand your goals and requirements.",
  "A recommended technology approach, scope and estimate.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactIntro.heading}
        description={contactIntro.text}
        breadcrumbs={[{ label: "Contact", href: "/contact/" }]}
      />

      <Section className="pt-0 sm:pt-0">
        <Container className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="glass rounded-[2rem] p-6 sm:p-10">
              <h2 className="text-2xl font-semibold sm:text-3xl">Send a project enquiry</h2>
              <p className="mt-2 mb-8 text-muted">Fields marked * are required.</p>
              <ContactForm />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div data-theme="dark" className="relative overflow-hidden rounded-[2rem] border border-line bg-linear-to-br from-brand-600 to-ink-800 p-8">
                <div aria-hidden className="absolute -top-16 -right-16 size-48 rounded-full bg-accent-cyan/30 blur-3xl" />
                <CalendarCheck aria-hidden className="relative size-8 text-foreground" />
                <h2 className="relative mt-5 text-2xl font-semibold">Prefer to talk first?</h2>
                <p className="relative mt-2 text-brand-100/80">Book a free consultation with our team directly on WhatsApp.</p>
                <a
                  href={buildWhatsAppUrl("Hi Fyntric Tech, I'd like to book a free consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonClassName({ variant: "inverse", size: "lg" }), "relative mt-6 w-full")}
                >
                  <MessageCircle aria-hidden className="size-5" />
                  {contactCtas.secondary}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass rounded-[2rem] p-8">
                <h2 className="text-lg font-semibold">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-500/15 font-display text-sm font-semibold text-accent">
                        {index + 1}
                      </span>
                      <span className="text-body">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass rounded-[2rem] p-8">
                <ul className="space-y-4 text-body">
                  <li className="flex items-center gap-3">
                    <MessageCircle aria-hidden className="size-5 text-accent" />
                    <a
                      href={buildWhatsAppUrl("Hi Fyntric Tech!")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground"
                    >
                      {contactConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail aria-hidden className="size-5 text-accent" />
                    <a href={`mailto:${contactConfig.email}`} className="hover:text-foreground">
                      {contactConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                    <a href={contactConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                      <address className="not-italic">
                        {siteConfig.legalName}
                        {contactConfig.address.lines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe2 aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span>Serving {siteConfig.markets.join(", ")}</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
