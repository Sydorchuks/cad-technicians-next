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
    className={`
      w-full
      max-w-[2500px]
      mx-auto
    
      px-[20px]
    
      min-[768px]:px-[68px]
      min-[1024px]:px-[140px]
      min-[1280px]:px-[180px]
      min-[1920px]:px-[160px]
      min-[2500px]:px-[480px]
      
      ${className || ""}
    `}
    >
      {children}
    </div>
  )
}