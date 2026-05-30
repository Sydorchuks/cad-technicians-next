type ButtonProps = {
    children: React.ReactNode
    variant?: "header"
    className?: string
  }
  
  export default function Button({
    children,
    variant = "header",
    className = "",
  }: ButtonProps) {
    const variants = {
      header: `border-2 border-primary text-primary font-bold uppercase`,
    }
  
    return (
      <button
        className={`
          ${variants[variant]}
          ${className}
        `}
      >
        {children}
      </button>
    )
  }