import { cn } from "../../../../../cn"

type BackgroundTitleProps = {
  children: React.ReactNode
  className?: string
  variant?: "light" | "dark"
}

export default function BackgroundTitle({
  children,
  className,
  variant = "light",
}: BackgroundTitleProps) {
  const styles =
    variant === "dark"
      ? {
          WebkitTextStroke: "2px rgba(255,255,255,0.12)",
          color: "transparent",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }
      : {
          WebkitTextStroke: "2px rgba(228,228,228,0.8)",
          color: "transparent",
        }

  return (
    <h2
      className={cn(
        "absolute z-0 whitespace-nowrap font-heading font-bold font-lora uppercase pointer-events-none select-none",
        className
      )}
      style={styles}
    >
      {children}
    </h2>
  )
}