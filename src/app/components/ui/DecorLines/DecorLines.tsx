import { cn } from "../../../../../cn"

type Direction = "horizontal" | "vertical"

type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "center"

interface Props {
  count: number
  direction: Direction
  position: Position
}

export default function DecorLines({count, direction, position,}: Props) {

  const isHorizontal = direction === "horizontal"

  return (
    <div
      className={cn(
        "absolute pointer-events-none z-1",
        {
          "top-0 left-0 w-full": isHorizontal && position === "top",
          "bottom-0 left-0 w-full": isHorizontal && position === "bottom",
          "top-1/2 left-0 w-full -translate-y-1/2": isHorizontal && position === "center",
          "left-0 top-0 h-full": !isHorizontal && position === "left",
          "right-0 top-0 h-full": !isHorizontal && position === "right",
          "top-0 left-1/2 -translate-x-1/2 h-full": !isHorizontal && position === "center",
        },
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? "flex flex-col gap-2.25 w-full"
            : "flex gap-10 h-full"
        )}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(
              isHorizontal
                ? "w-full border-t border-border"
                : "h-full border-l border-border"
            )}
          />
        ))}
      </div>
    </div>
  )
}