import Container from "../../components/ui/Container/Container";
import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import DecorLines from "../ui/DecorLines/DecorLines";

export default function HomeAbout() {
  return (
    <section className="relative w-full md:h-169 lg:h-175 xl:h-225 2xl:h-270 overflow-hidden bg-white border-b border-border">

      <div className="absolute left-0 top-3.75 md:top-8.25 2xl:top-13.75 w-full z-0">
        <div className="2xl:hidden">
          <DecorLines count={5} position="top" direction="horizontal" />
        </div>
        <div className="hidden 2xl:block">
          <DecorLines count={18} position="top" direction="horizontal" />
        </div>
      </div>

      <div className="absolute left-0 bottom-8.25 2xl:bottom-14.5 w-full z-0">
        <DecorLines
          count={4} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute hidden lg:block left-15 2xl:left-31 ultra:left-103.5 top-0 h-full z-0">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute hidden lg:block right-15 2xl:right-40.25 ultra:right-112.75 top-0 h-full z-0">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute left-0 top-60 lg:top-90 xl:top-112.5 2xl:top-148.75 -translate-y-1/2 w-full z-0">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <BackgroundTitle
        variant="light"
        className="
          hidden md:flex left-85 lg:left-137.5 xl:left-187.5 2xl:left-242.5 ultra:left-337.25
          text-background-md lg:text-background-md-lg xl:text-background-lg-lite 2xl:text-background-lg-xl ultra:text-background-xxl
          top-14 xl:top-43 2xl:top-56 ultra:top-37"
      >
        ABOUT
      </BackgroundTitle>

      <Container>
        <div className="hidden md:flex relative z-20 pt-0 lg:pt-10 xl:pt-2.5 2xl:pt-69.75 flex-col 2xl:flex-row items-end 2xl:items-start">
            <img
              src="/logo-bg.svg"
              alt=""
              className="hidden md:flex w-65 lg:w-105 xl:w-155 2xl:w-186.5
                h-auto shrink-0 object-contain pointer-events-none select-none self-start 2xl:self-auto
                pt-22.5 lg:pt-17.5 xl:pt-50 2xl:pt-0 -ml-15 lg:-ml-10 lg:-translate-x-35 xl:-translate-x-35 2xl:translate-x-0"
            />

            <div
              className="w-105 lg:w-130 xl:w-180 2xl:w-197 ml-0 2xl:-ml-15
                -mt-35 lg:-mt-55 xl:-mt-90 2xl:mt-0 xl:translate-x-62.5 2xl:translate-x-0"
            >
              <h3
                className="font-heading font-normal uppercase text-text-dark whitespace-nowrap
                  text-5xl-6xl lg:text-6xl-7xl xl:text-background-sm 2xl:text-background-sm-md 2xl:pt-30"
                style={{
                  lineHeight: "1.28",
                }}
              >
                ABOUT US
              </h3>

              <p
                className="
                  mt-2.5 lg:mt-6.25 xl:mt-15 2xl:mt-22 font-body font-normal text-text-dark
                  text-md-lg lg:text-md xl:text-md 2xl:text-md leading-6.5 xl:max-w-175 2xl:max-w-none"
              >
                Survey Drafters has decades of experience in the land surveying
                industry, and our ability to work virtually with professionals
                across the country is what sets us apart from the rest. We
                minimize your expenses and maximize your productivity by using
                your field data to create high-quality AutoCAD drawings. You can
                take on more clients and promise a faster turnaround time to your
                clients by partnering with Survey Drafters.
              </p>

              <button
                className="
                  mt-6.75 lg:mt-8.75 xl:mt-15 2xl:mt-22 mx-0 w-48.25 h-14.5
                  lg:w-55 lg:h-15 xl:w-62.5 xl:h-15.5 2xl:w-65.5 2xl:h-15.75
                  border-2 border-bg-highlight flex items-center justify-center font-body font-bold uppercase
                  text-[14px] lg:text-sm-md xl:text-md text-bg-highlight transition-all duration-300 hover:bg-bg-highlight hover:text-white"
                style={{
                  lineHeight: "26px",
                }}
              >
                READ MORE
              </button>
            </div>
        </div>


        <div className="md:hidden relative h-145 overflow-hidden flex justify-center ">

          <BackgroundTitle
            variant="light"
            className="absolute left-17.5 top-12.5 text-background-sm z-1"
          >
            ABOUT
          </BackgroundTitle>

          <div className="relative z-20 pt-25">
            <div className="ml-14.25 w-68.5">
              <h3 className="font-heading font-normal uppercase text-text-dark text-2xl-3xl"
                style={{
                  lineHeight: "46px",
                }}
              >
                ABOUT US
              </h3>

              <p className="mt-3.25 font-body font-normal text-text-dark text-sm-md leading-5">
                Survey Drafters has decades of experience in the land surveying
                industry, and our ability to work virtually with professionals
                across the country is what sets us apart from the rest. We
                minimize your expenses and maximize your productivity by using
                your field data to create high-quality AutoCAD drawings. You can
                take on more clients and promise a faster turnaround time to your
                clients by partnering with Survey Drafters.
              </p>

              <button
                className="mt-6 w-39.5 h-9 border-2 border-bg-highlight flex items-center justify-center font-body 
                 font-bold uppercase text-xs-sm text-bg-highlight transition-all duration-300 hover:bg-bg-highlight hover:text-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}