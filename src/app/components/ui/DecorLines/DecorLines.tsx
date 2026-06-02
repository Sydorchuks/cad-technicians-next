import { cn } from "../../../../../cn"

interface Props {
  count?: number
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "center-horizontal"
    | "center-vertical"
  className?: string
}

export default function DecorLines({
  count = 10,
  position = "top"
}: Props) {

  const horizontalLine = "absolute left-0 w-full border-t border-border";
  const verticalLine = "absolute top-0 h-full border-l border-border";

  return (
    <div
    className={cn(
      "absolute pointer-events-none z-1",
      position === "top" && "top-0 left-0 w-full",
      position === "bottom" && "bottom-0 left-0 w-full",
      position === "center-horizontal" && "top-1/2 left-0 w-full -translate-y-1/2",
      position === "left" && "left-0 top-0 h-full",
      position === "right" && "right-0 top-0 h-full",
      position === "center-vertical" && "top-0 left-1/2 -translate-x-1/2 h-full",
    )}
    >
    {Array.from({ length: count }).map((_, i) => {
      if (position === "top") {
        return (
          <div
            key={i}
            className={horizontalLine}
            style={{ top: `${i * 10}px` }}
          />
        )
      }

      if (position === "bottom") {
        return (
          <div
            key={i}
            className={horizontalLine}
            style={{ bottom: `${i * 10}px` }}
          />
        )
      }

      if (position === "center-horizontal") {
        return (
          <div
            key={i}
            className={horizontalLine}
            style={{
              top: `calc(50% + ${i * 10}px)`
            }}
          />
        )
      }

      if (position === "left") {
        return (
          <div
            key={i}
            className={verticalLine}
            style={{ left: `${i * 40}px` }}
          />
        )
      }

      if (position === "right") {
        return (
          <div
            key={i}
            className={verticalLine}
            style={{ right: `${i * 40}px` }}
          />
        )
      }

      if (position === "center-vertical") {
        return (
          <div
            key={i}
            className={verticalLine}
            style={{ left: `${i * 10}px` }}
          />
        )
      }

      return null
    })}
    </div>
  )
}