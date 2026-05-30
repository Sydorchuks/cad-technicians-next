type Props = {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className
}: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-full px-5 md:max-w-158 lg:max-w-186 xl:max-w-230 2xl:max-w-385
        ${className || ""}
      `}
    >
      {children}
    </div>
  )
}