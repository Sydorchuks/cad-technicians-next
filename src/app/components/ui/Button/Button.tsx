import { cn } from "../../../../../cn";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline-green";
};

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

    "outline-green": `
      border-bg-highlight
      text-bg-highlight
      hover:bg-bg-highlight
      hover:text-white
    `,
  };

  return (
    <button
      className={cn(
        `
          border-2 font-bold uppercase transition-colors duration-300
          h-9 md:h-14.5 lg:h-15 xl:h-15.5 2xl:h-15.75
        `,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}