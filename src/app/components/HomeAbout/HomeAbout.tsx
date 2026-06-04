import Container from "../../components/ui/Container/Container";
import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import DecorLines from "../ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css"
import Button from "../ui/Button/Button";

export default function HomeAbout() {
  return (
    <section className="relative w-full py-0 md:py-20 lg:py-30 xl:py-30 2xl:py-40 overflow-hidden bg-white border-b border-border">

      <div className="absolute left-0 top-3.75 md:top-8.25 2xl:top-13.75 w-full z-0">
        <div className="2xl:hidden">
          <DecorLines count={6} position="top" direction="horizontal" />
        </div>
        <div className="hidden 2xl:block">
          <DecorLines count={17} position="top" direction="horizontal" />
        </div>
      </div>

      <div className="absolute left-0 bottom-8.25 2xl:bottom-14.5 w-full z-0">
        <DecorLines count={4} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute hidden lg:block vertical-line-left top-0 h-full z-0">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="hidden lg:block absolute vertical-line-left-2 top-0 h-full z-0">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute hidden lg:block vertical-line-right top-0 h-full z-0">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute hidden md:block left-0 top-70 md:top-60 lg:top-100 xl:top-122.5 2xl:top-158.75 -translate-y-1/2 w-full z-0">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <Container>
        <div
          className="
            relative z-20 pt-25 md:pt-0 lg:pt-10 xl:pt-0 2xl:pt-40
            flex flex-col 2xl:flex-row items-start md:items-end 2xl:items-start"
        >
          <BackgroundTitle
            variant="light"
            className="
              absolute left-28 top-23
              md:left-64 lg:left-68 xl:left-128 2xl:left-188
              text-bg-sm md:text-bg-md lg:text-[240px] xl:text-[300px] 2xl:text-bg-lg ultra:text-bg-xl
              md:top-0 xl:top-25 2xl:top-25 ultra:top-10"
          >
            ABOUT
          </BackgroundTitle>
          <img
            src="/logo-bg.svg"
            alt=""
            className="
              hidden md:flex w-65 lg:w-105 xl:w-155 2xl:w-186.5 h-auto shrink-0 object-contain pointer-events-none select-none self-start 2xl:self-auto
              pt-22.5 md:pt-2 lg:pt-17.5 xl:pt-30 2xl:pt-0
              -ml-15 lg:-ml-10 lg:-translate-x-35 xl:-translate-x-35 2xl:translate-x-0"
          />
          <div
            className="
              relative ml-14.25 md:ml-0 w-68.5 md:w-105 lg:w-130 xl:w-180 2xl:w-197
              pt-30 md:pt-0 md:-mt-39 lg:-mt-55 xl:-mt-90 2xl:mt-0 xl:translate-x-62.5 2xl:translate-x-0 2xl:-ml-15 -translate-y-25 md:translate-y-0"
          >
            <h3
              className="
                font-heading font-normal uppercase text-text-dark whitespace-nowrap
                text-[44px] md:text-[80px] lg:text-[72px] xl:text-bg-sm 2xl:text-[120px] 2xl:pt-30 leading-[1.28]"
            >
              ABOUT US
            </h3>

            <p
              className="
                mt-3.25 lg:mt-22 font-body font-normal text-text-dark
                text-base md:text-lg lg:text-md xl:text-md 2xl:text-md
                leading-5 md:leading-6.5 xl:max-w-175 2xl:max-w-none"
            >
              Survey Drafters has decades of experience in the land surveying industry, and our ability to work 
              virtually with professionals across the country is what sets us apart from the rest. We minimize 
              your expenses and maximize your productivity by using your field data to create high-quality AutoCAD drawings. 
              You can take on more clients and promise a faster turnaround time to your clients by partnering with Survey Drafters.
            </p>
            <Button
              variant="outline-green"
              className="
                mt-6 lg:mt-8.75 w-39.5 md:w-48.25 lg:w-55 xl:w-62.5 2xl:w-65.5
                flex items-center justify-center text-xs md:text-sm lg:text-base xl:text-md"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}