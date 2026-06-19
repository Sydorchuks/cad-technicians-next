import { cn } from "../../../../../cn";

type BackgroundTitleProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "dark-no-fade";
};

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
            "linear-gradient(to bottom, black 0%, black 15%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 15%, transparent 100%)",
        }
      : variant === "dark-no-fade"
        ? {
            WebkitTextStroke: "2px rgba(255,255,255,0.12)",
            color: "transparent",
          }
        : {
            WebkitTextStroke: "2px rgba(228,228,228,0.8)",
            color: "transparent",
          };

  return (
    <div
      className={cn(
        "absolute z-0 whitespace-nowrap font-heading font-bold font-lora uppercase pointer-events-none select-none",
        className
      )}
      style={styles}
    >
      {children}
    </div>
  );
}
