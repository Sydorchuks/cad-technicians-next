type Props = {
    onClick: () => void
  }
  
  export default function PlayButton({ onClick }: Props) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 desktop:w-24 desktop:h-24 ultra:w-31.5 ultra:h-31.5
          rounded-full bg-dark-frame flex items-center justify-center cursor-pointer transition hover:scale-[1.1]"
      >
        <div
          className="
            ml-0.5 w-0 h-0
            border-t-[7px] border-b-[7px] border-l-11
            md:border-t-12 md:border-b-12 md:border-l-18
            lg:border-t-13 lg:border-b-13 lg:border-l-20
            xl:border-t-15 xl:border-b-15 xl:border-l-22
            desktop:border-t-16 desktop:border-b-16 desktop:border-l-24
            ultra:border-t-[20.5px] ultra:border-b-[20.5px] ultra:border-l-31
            border-t-transparent border-b-transparent border-l-white"
        />
      </button>
    )
  }