"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, primaryCta } from "@/config/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? path === "/" : path.startsWith(href);
}

/** Sticky header: transparent over the hero, glass once scrolled, hides while scrolling down. */
export function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith("/crm-landing")) {
    return null;
  }
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);

  // Close the mobile menu after navigating (adjusting state during render, not in an effect).
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMenuOpen(false);
  }

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(current > 24);
    setIsHidden(current > 320 && current > previous);
  });

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isHidden && !isMenuOpen ? -100 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-500",
          isScrolled || isMenuOpen ? "border-b border-line bg-background/70 backdrop-blur-xl" : "border-b border-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Logo priority />

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-line bg-tint p-1.5 backdrop-blur">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="relative">
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-tint-strong"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block rounded-full px-5 py-2 text-sm font-medium transition-colors",
                        active ? "text-foreground" : "text-muted hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden lg:block">
              <ButtonLink href={primaryCta.href} withArrow>
                {primaryCta.label}
              </ButtonLink>
            </div>
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid size-11 place-items-center rounded-full border border-line-strong text-foreground md:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <Container className="flex h-full flex-col justify-between py-10">
              <ul className="space-y-2">
                {mainNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 font-display text-4xl font-semibold",
                        isActive(pathname, item.href) ? "text-gradient" : "text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <ButtonLink href={primaryCta.href} size="lg" withArrow>
                {primaryCta.label}
              </ButtonLink>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
