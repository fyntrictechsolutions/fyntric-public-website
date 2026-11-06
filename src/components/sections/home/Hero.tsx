"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CircleCheck, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Stage } from "@/components/sections/services/illustrations";
import { SaasScene } from "@/components/sections/services/illustrations/SaasScene";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { heroImage } from "@/content/media";
import { homeHero } from "@/content/home";
import { primaryCta } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Words of the H1 that get the gradient highlight. */
const highlighted = new Set(["AI", "&", "Digital", "Solutions"]);

function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % words.length), 2200);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="relative inline-grid h-7 min-w-36 overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-gradient font-semibold whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * Hero visual: the hero photo (or, until it is added, a product dashboard illustration)
 * with live-looking product cards floating around it. Decorative.
 */
function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[36rem]">
      <div className="absolute inset-[10%] animate-pulse-glow rounded-full bg-brand-500/40 blur-3xl" />

      <MediaFrame
        image={heroImage}
        sizes="(min-width: 1024px) 40vw, 100vw"
        priority
        className="aspect-[5/4] rounded-[2rem] shadow-[0_40px_80px_-30px_rgb(10_95_224_/_0.5)] ring-1 ring-white/20"
        fallback={
          <Stage gradient="from-brand-600 via-brand-500 to-accent-cyan" className="size-full">
            <SaasScene />
          </Stage>
        }
      />

      <div className="glass absolute top-[6%] -left-[10%] animate-float rounded-2xl px-4 py-3 text-xs shadow-2xl">
        <p className="flex items-center gap-2 font-medium text-foreground">
          <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" /> AI agent online
        </p>
        <p className="mt-1 text-muted">Qualifying new leads…</p>
      </div>

      <div className="glass absolute -bottom-[8%] -left-[6%] flex w-56 animate-float items-center gap-3 rounded-2xl p-3 shadow-2xl [animation-delay:-2s]">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent-violet to-fuchsia-500 text-white">
          <Smartphone className="size-5" />
        </span>
        <span className="text-xs">
          <span className="block font-semibold text-foreground">App release 2.4</span>
          <span className="mt-1 block h-1.5 w-28 overflow-hidden rounded-full bg-tint-strong">
            <span className="block h-full w-4/5 rounded-full bg-linear-to-r from-accent-violet to-fuchsia-500" />
          </span>
        </span>
      </div>

      <div className="glass absolute -right-[6%] bottom-[18%] animate-float rounded-2xl px-4 py-3 text-xs shadow-2xl [animation-delay:-4s]">
        <p className="flex items-center gap-2 font-medium text-foreground">
          <CircleCheck className="size-4 text-emerald-500" /> Deployment complete
        </p>
        <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-tint-strong">
          <div className="h-full w-full rounded-full bg-linear-to-r from-brand-500 to-accent-cyan" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const words = homeHero.heading.split(" ");

  return (
    <section
      ref={sectionRef}
      className="noise relative isolate flex min-h-svh items-center overflow-hidden pt-32 pb-28"
    >
      <AmbientBackground />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <motion.div style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow>{homeHero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-7 text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl xl:text-[4.25rem]">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${highlighted.has(word) ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease }}
                >
                  {word}
                </motion.span>
                {i < words.length - 1 && " "}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {homeHero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <ButtonLink href={primaryCta.href} size="lg" withArrow>
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href="/services/" size="lg" variant="secondary">
              Explore Services
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex items-center gap-3 text-sm text-muted"
          >
            <span className="h-px w-10 bg-linear-to-r from-transparent to-brand-400" />
            We build <RotatingWord words={homeHero.rotatingWords} />
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          style={reduceMotion ? undefined : { scale: visualScale, y: visualY }}
          className="px-4 sm:px-10 lg:px-6"
        >
          <HeroVisual />
        </motion.div>
      </Container>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-subtle uppercase sm:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-tint-strong">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-brand-400"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
