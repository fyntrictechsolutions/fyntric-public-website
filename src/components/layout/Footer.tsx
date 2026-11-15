"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { contactConfig, mainNav, siteConfig } from "@/config/site";
import { getServicePath, services } from "@/content/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const footerServices = services.filter((service) =>
  [
    "web-development",
    "mobile-app-development",
    "crm-development",
    "saas-development",
    "ai-automation",
    "blockchain-development",
    "shopify-development",
  ].includes(service.slug),
);

export function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/crm-landing")) {
    return null;
  }
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]"
      />
      <Container className="relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 leading-relaxed text-muted">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-subtle">Serving {siteConfig.markets.join(" · ")}</p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-widest text-foreground uppercase">Services</h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link href={getServicePath(service.slug)} className="text-muted transition-colors hover:text-foreground">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-widest text-foreground uppercase">Company</h2>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-widest text-foreground uppercase">Get in touch</h2>
            <ul className="mt-5 space-y-4 text-muted">
              <li>
                <a
                  href={buildWhatsAppUrl("Hi Fyntric Tech, I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <MessageCircle aria-hidden className="size-4 text-accent" />
                  {contactConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-foreground">
                  <Mail aria-hidden className="size-4 text-accent" />
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-foreground"
                >
                  <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                  <address className="not-italic">
                    {contactConfig.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Custom Software · AI · SaaS · Blockchain</p>
        </div>
      </Container>
    </footer>
  );
}
