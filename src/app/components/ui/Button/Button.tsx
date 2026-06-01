import { cn } from "../../../../../cn"

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary"
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      border-primary
      text-primary
      hover:bg-primary
      hover:text-white
    `,

    secondary: `
      border-white
      text-text-light
      hover:bg-white
      hover:text-primary
    `,
  }

  return (
    <button
      className={cn(
        "border-2 font-bold uppercase transition-colors duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}