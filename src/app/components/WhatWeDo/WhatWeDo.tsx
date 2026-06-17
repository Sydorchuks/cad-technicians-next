import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import "../../styles/vertical-lines.css";

export default function WhatWeDo() {
  return (
    <section className="relative h-127.5 w-full overflow-hidden bg-white md:h-177.75 xl:h-307.5">
      <div className="absolute left-1/2 top-35 md:top-47.5 z-10 w-full max-w-79.25 -translate-x-1/2 text-center md:max-w-124.25 xl:left-[50%] xl:top-65 xl:w-230 xl:max-w-none">
        <BackgroundTitle
          variant="light"
          className="
            left-1/2 -top-35 w-full -translate-x-1/2 text-center
            text-bg-sm leading-[0.9] whitespace-normal opacity-66
            md:-top-50 md:text-bg-md
            xl:left-300 2xl:left-275 xl:-top-51.25 xl:w-auto xl:text-bg-lg xl:leading-none xl:whitespace-nowrap
          "
        >
          <span className="block md:hidden">WHAT WE</span>
          <span className="block md:hidden">DO?</span>

          <span className="hidden md:block xl:inline">WHAT </span>
          <span className="hidden md:block md:-ml-13 xl:ml-0 xl:inline">WE DO?</span>
        </BackgroundTitle>

        <h2 className="relative -top-12 md:top-0 z-10 font-lora text-4xl font-normal uppercase leading-none text-text-dark md:text-7xl xl:text-9xl">
          WHAT WE DO?
        </h2>

        <p className="relative z-10 mx-auto mt-5 w-full font-body text-base font-normal leading-6.5 text-text-dark md:mt-7 md:text-md xl:mt-7.5 xl:w-175">
          Our business is a blend of technical knowledge and experienced customer service. From start to finish, you&apos;ll find that working
          with Survey Drafters is a pleasure. We offer a partnership that allows your business to skyrocket to the next level.
        </p>
      </div>

      <img
        src="/what-we-do.svg"
        alt=""
        className="absolute bottom-0 left-0 z-10 h-32.25 w-full object-cover md:h-68.5 xl:h-167"
      />
    </section>
  );
}