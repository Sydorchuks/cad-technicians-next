import { cn } from "../../../../../cn"

type BackgroundTitleProps = {
    children: React.ReactNode
    className?: string
  }
  
  export default function BackgroundHeroTitle({
    children,
    className = "",
  }: BackgroundTitleProps) {
    return (
      <h1
      className={cn(
        "absolute left-0 z-0 whitespace-nowrap font-lora font-bold leading-none uppercase opacity-[0.12] pointer-events-none select-none",
        className
      )}
        style={{
          WebkitTextStroke: "2px rgba(255,255,255,0.5)",
          color: "transparent",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        {children}
      </h1>
    )
  }