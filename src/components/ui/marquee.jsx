"use client";
import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style,
  ...props
}) {
  // default duration can be overridden by className like "[--duration:50s]"
  // Ensure the browser can read var(--duration) by also setting animationDuration inline.
  const animatedClass = vertical ? "animate-marquee-vertical" : "animate-marquee";

  return (
    <div
      {...props}
      className={cn(
        "group relative flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={style}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            // each block is the repeated chunk that will slide
            className={cn(
              "flex shrink-0 justify-start items-start [gap:var(--gap)]",
              vertical ? "flex-col" : "flex-row",
              animatedClass,
              reverse && "[animation-direction:reverse]",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
            // ensure the browser can compute animation duration from the CSS var
            style={{
              animationDuration: "var(--duration)",
              // Ensure content size is preserved so translate moves the whole chunk:
              ...(vertical ? { minHeight: "max-content" } : { minWidth: "max-content" }),
            }}
            aria-hidden={i > 0} // duplicates can be hidden from assistive tech
          >
            {children}
          </div>
        ))}
    </div>
  );
}
