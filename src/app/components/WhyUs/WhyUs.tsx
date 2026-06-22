import { cn } from "../../../../cn";
import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import Button from "../ui/Button/Button";
import DecorLines from "../ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

const items = [
  {
    title: "TIME",
    text: "Your time is valuable, and running a business isn’t easy. Instead of spending your day sitting in front of the computer using AutoCAD, let us do the heavy lifting. We take work off your plate to allow you to grow your business.",
    icon: "/why-1.svg",
    iconClassName:
      "h-[67px] w-[67px] xl:h-[78px] xl:w-[78px] 2xl:h-[86px] 2xl:w-[86px] ultra:h-[98px] ultra:w-[98px]",
  },
  {
    title: "MONEY",
    text: "Let’s face it - licensing AutoCAD isn’t cheap! We offer drafting services at an affordable price, letting you free up your money for other business expenses. Save on office overhead by partnering with Survey Drafters.",
    icon: "/why-2.svg",
    iconClassName:
      "h-[80px] w-[80px] md:h-[75px] md:w-[75px] xl:h-[92px] xl:w-[92px] 2xl:h-[100px] 2xl:w-[100px] ultra:h-[114px] ultra:w-[114px]",
  },
  {
    title: "SKILL",
    text: "Our team of experienced drafters has been working with land surveyors for decades - and it shows! You’ll get high-quality drawings and professional communication from start to finish. Get started with us today!",
    icon: "/why-3.svg",
    iconClassName:
      "h-[75px] w-[75px] xl:h-[92px] xl:w-[92px] 2xl:h-[101px] 2xl:w-[101px] ultra:h-[115px] ultra:w-[115px]",
  },
];

function WhyUsDecor() {
  return (
    <>
      <div className="absolute top-0 vertical-line-left z-0 hidden h-full opacity-15 md:flex">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-right z-0 hidden h-full opacity-15 md:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute left-0 top-32.5 z-0 w-full opacity-15 md:top-44.25 xl:top-33.75 2xl:top-36.25 ultra:top-37.75">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute left-0 top-71.5 z-0 hidden w-full opacity-15 xl:flex xl:top-90 2xl:top-96.5 ultra:top-100.75">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-32.5 left-0 z-0 w-full opacity-15 md:bottom-35.5 xl:bottom-37 2xl:bottom-39.75 ultra:bottom-42">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-30.75 left-0 z-0 w-full opacity-15 md:bottom-32.25 xl:bottom-33.75 2xl:bottom-36.5 ultra:bottom-38.5">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-9 left-0 z-0 w-full opacity-15">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute left-[52%] top-127.5 hidden h-62.5 opacity-15 xl:block 2xl:left-187 2xl:top-137 2xl:h-70 ultra:left-271.75 ultra:top-142.75 ultra:h-72.5">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute left-[76%] top-127.5 hidden h-62.5 opacity-15 xl:block 2xl:left-299.25 2xl:top-137 2xl:h-70 ultra:left-387 ultra:top-142.75 ultra:h-72.5">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>
    </>
  );
}

export default function WhyUs() {
  return (
    <section className="
        relative overflow-hidden bg-primary pt-24 pb-15 md:pt-25 md:pb-15.25 lg:pt-28 lg:pb-18.75
        xl:pt-43.75 xl:pb-17.5 2xl:pt-47.5 2xl:pb-15 ultra:pt-44.5 ultra:pb-15"
    >
      <WhyUsDecor />

      <BackgroundTitle
        variant="dark"
        className="left-1/2 top-5 -translate-x-1/2 text-bg-sm leading-none md:left-1/3 md:top-7.5 md:text-[160px] xl:hidden"
      >
        <span className="md:hidden">WHY US?</span>
        <span className="hidden md:inline">WHY</span>
      </BackgroundTitle>

      <BackgroundTitle
        variant="dark-no-fade"
        className="hidden xl:block xl:left-95 xl:top-5 xl:text-[330px] xl:leading-97.5
          2xl:left-122.25 2xl:text-bg-lg 2xl:leading-115 ultra:left-178.25 ultra:top-0 ultra:leading-128"
      >
        WHY
      </BackgroundTitle>

      <BackgroundTitle
        variant="dark-no-fade"
        className="
          hidden xl:block xl:left-95 xl:top-117.5 xl:text-[330px] xl:leading-97.5
          2xl:left-122.25 2xl:top-130 2xl:text-bg-lg 2xl:leading-115 ultra:left-178.25 ultra:top-128 ultra:leading-128"
      >
        US?
      </BackgroundTitle>

      <div className="relative z-10 px-5 md:px-0 xl:pl-37.5 2xl:pl-75 ultra:pl-140">
        <h2
          className="
            mx-auto xl:mx-0 w-fit font-lora text-4xl font-normal uppercase leading-none text-white
            -mt-4 md:mt-0 md:text-7xl xl:text-[96px] xl:leading-30
            2xl:-ml-25 2xl:text-9xl 2xl:leading-34.5 ultra:ml-0 ultra:leading-38.5"
        >
          WHY US?
        </h2>

        <div
          className="
            mx-auto mt-7.25 flex w-full max-w-68 flex-col items-center gap-13.75 text-center
            md:mt-15 md:max-w-98.5 md:gap-19.25 lg:max-w-107.5 lg:gap-20.5
            xl:mx-0 xl:mt-26.25 xl:max-w-none xl:flex-row xl:items-start xl:gap-20 xl:text-left
            2xl:-ml-25 2xl:mt-35.5 2xl:gap-23 ultra:ml-0 ultra:mt-37 ultra:gap-26"
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="w-full xl:w-80 2xl:w-98.5 ultra:w-93.75"
            >
              <div className="flex h-20 items-center justify-center md:h-18.75 xl:h-24 xl:justify-start 2xl:h-26.25 ultra:h-28.75">
                <img
                  src={item.icon}
                  alt=""
                  className={cn("object-contain", item.iconClassName)}
                />
              </div>

              <h3
                className="
                  mt-7 font-lora text-4xl font-normal uppercase leading-none text-white
                  md:mt-5.75 xl:mt-5 xl:text-[42px] xl:leading-13
                  2xl:mt-6 2xl:text-[46px] 2xl:leading-14.5 ultra:text-6xl ultra:leading-16"
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4 font-body text-base font-normal leading-6.25 text-white
                  md:mt-6.5 xl:mt-6 2xl:mt-6.5 2xl:text-md ultra:mt-7.75 ultra:text-lg"
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-15.5 flex justify-center md:mt-10 lg:mt-13 xl:mt-16 2xl:mt-35 ultra:mt-20">
        <Button
          variant="secondary"
          className="
            flex w-39.5 items-center justify-center text-[12px] leading-5.75
            md:h-13.25 md:w-45.5 md:text-base xl:h-14.5 xl:w-57.5 2xl:h-15.75 2xl:w-65.5 2xl:text-md"
        >
          GET STARTED
        </Button>
      </div>
    </section>
  );
}