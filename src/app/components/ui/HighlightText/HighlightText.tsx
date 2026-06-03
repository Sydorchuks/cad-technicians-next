import { cn } from "../../../../../cn"

type HighlightTextProps = {
    children: React.ReactNode
    className?: string
  }
  
  export default function HighlightText({ children, className }: HighlightTextProps) {
    return (
      <span
        className={cn(
          "relative inline-block",
          className
        )}
      >
        {children}
        <span className="absolute left-0 bottom-1 w-full h-2.5 bg-bg-highlight -z-10"/>
      </span>
    )
  }