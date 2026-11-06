"use client";

import { useRef, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { cn } from "@/lib/cn";

/**
 * Glass card with a soft light that follows the pointer,
 * lighting up both the border and the surface.
 */
export function SpotlightCard({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border border-line bg-surface shadow-[var(--theme-card-shadow)] transition-colors duration-500 hover:border-brand-400/60 dark:bg-surface/60",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(22 119 255 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
