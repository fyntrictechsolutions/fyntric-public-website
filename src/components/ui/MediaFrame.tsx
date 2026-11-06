import Image from "next/image";
import type { ReactNode } from "react";
import type { MediaImage } from "@/content/media";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  image: MediaImage;
  /** Shown while the photo hasn't been added yet. */
  fallback: ReactNode;
  /** `sizes` hint for the browser, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** A rounded frame that shows a photo when one is configured, otherwise its illustration fallback. */
export function MediaFrame({ image, fallback, sizes, priority, className }: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        fallback
      )}
    </div>
  );
}
