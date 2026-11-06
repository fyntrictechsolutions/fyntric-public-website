"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { Stage, serviceIllustrations } from "@/components/sections/services/illustrations";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getServicePath, services } from "@/content/services";
import { cn } from "@/lib/cn";

const ease = [0.22, 1, 0.36, 1] as const;

/** The large card on the left: the service currently hovered or focused on the right. */
function FeaturedService({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug) ?? services[0];
  const illustration = serviceIllustrations[service.slug];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[var(--theme-card-shadow)] dark:bg-surface/60">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease }}
        >
          <div className="p-3 sm:p-4">
            {illustration && (
              <Stage gradient={illustration.gradient}>
                <illustration.Scene />
              </Stage>
            )}
          </div>
          <div className="px-7 pt-4 pb-8 sm:px-9">
            <h3 className="text-3xl font-semibold tracking-tight">{service.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{service.hero}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.capabilities.slice(0, 4).map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-body"
                >
                  <Check aria-hidden className="size-3 text-accent" strokeWidth={3} />
                  {capability}
                </li>
              ))}
            </ul>
            <ButtonLink href={getServicePath(service.slug)} className="mt-8" withArrow>
              Explore {service.name}
            </ButtonLink>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * "What we do": a big featured card beside a grid of every service.
 * Hovering or focusing a small card swaps the featured card to that service.
 */
export function ServicesExplorer() {
  const [active, setActive] = useState(services[0].slug);

  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Our Technology <span className="text-gradient">Services</span>
              </>
            }
            description="From websites and mobile apps to SaaS platforms, AI agents and Web3 products, one team takes your idea from strategy to launch."
          />
          <Reveal delay={0.2}>
            <ButtonLink href="/services/" variant="secondary" withArrow>
              View all services
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="lg:sticky lg:top-28">
            <FeaturedService slug={active} />
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = service.slug === active;
              return (
                <Reveal
                  as="li"
                  key={service.slug}
                  delay={(index % 2) * 0.05}
                  y={16}
                  className={cn(index === services.length - 1 && services.length % 2 === 1 && "sm:col-span-2")}
                >
                  <Link
                    href={getServicePath(service.slug)}
                    onMouseEnter={() => setActive(service.slug)}
                    onFocus={() => setActive(service.slug)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex h-full items-center gap-4 rounded-2xl border p-4 transition-all duration-300",
                      isActive
                        ? "border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                        : "border-line bg-surface text-foreground shadow-[var(--theme-card-shadow)] hover:border-brand-400 dark:bg-surface/60",
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-xl transition-colors",
                        isActive ? "bg-white/15 text-white" : "bg-brand-500/10 text-accent",
                      )}
                    >
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold">{service.name}</span>
                      <span className={cn("mt-0.5 line-clamp-2 text-xs", isActive ? "text-white/80" : "text-muted")}>
                        {service.summary}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className={cn(
                        "size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        isActive ? "text-white" : "text-subtle",
                      )}
                    />
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
