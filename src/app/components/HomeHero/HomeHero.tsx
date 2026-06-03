import Container from "../../components/ui/Container/Container";
import BackgroundHeroTitle from "../ui/BackgroundHeroTitle/BackgroundHeroTitle";
import DecorLines from "../ui/DecorLines/DecorLines";
import HighlightText from "../ui/HighlightText/HighlightText";

export default function HomeHero() {
  return (
    <section
      className="relative h-90 md:h-122 lg:h-187.5 xl:h-212.5 2xl:h-270 overflow-hidden bg-primary">

      <BackgroundHeroTitle className="top-15 md:top-27.5 lg:top-41.25 text-background-sm md:text-background-md lg:text-background-lg xl:text-background-xl 2xl:text-background-xxl">
        TECHNICIANS
      </BackgroundHeroTitle>

      <div className="hidden md:block absolute left-15 desktop:left-30.5 ultra:left-103.75 opacity-15 top-0 h-full">
        <DecorLines count={1} position="left" direction="vertical"/>
      </div>

      <div className="hidden md:block absolute left-66.75 desktop:left-188.75 ultra:left-263.75 opacity-15 top-0 h-full">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="hidden md:block absolute left-87.5 desktop:left-243.75 ultra:left-319.5 opacity-15 top-0 h-97.5 desktop:h-210">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="hidden desktop:block opacity-15 absolute left-0 right-0 bottom-41.5 z-0">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <Container>
        <div className="relative z-10 flex justify-between items-center md:items-start gap-0 md:gap-5 lg:gap-0 pt-10 md:pt-37.25 lg:pt-52">
          <div className="w-full max-w-85 md:max-w-69.25 lg:max-w-130 xl:max-w-150 2xl:max-w-171 mx-auto md:mx-0 shrink-0">

            <div className="absolute right-0 top-0 h-screen max-sm:hidden opacity-15">
              <DecorLines count={1} position="right" direction="vertical"/>
            </div>

            <p
              className="font-body text-md-lg lg:text-3xl xl:text-4xl 2xl:text-5xl leading-6 lg:leading-10.5 xl:leading-none
                mt-20 md:mt-15.5 lg:mt-25 xl:mt-35 2xl:mt-70 font-normal text-white"
            >
              With decades of experience <br />working with land surveyors, <br /> we provide precise AutoCAD
              <br />drawings that offer <br />high-quality{" "}<HighlightText>professionalism</HighlightText>
              <br /> at a <HighlightText>reasonable price</HighlightText>
            </p>

            <button
              className="relative mt-3.25 lg:mt-7.5 xl:mt-8.75 2xl:mt-10
                text-sm-md lg:text-md xl:text-md 2xl:text-md-lg font-bold leading-6.5 uppercase
                text-white block after:block after:w-22.5 lg:after:w-25 2xl:after:w-27.5
                after:h-1 after:mt-0 after:bg-bg-highlight after:content-[''] transition-colors duration-300 hover:opacity-70"
            >
              TRY IT NOW
            </button>
          </div>

          <img
            src="/hero-map.svg"
            alt=""
            className="hidden md:block md:w-78.75 lg:w-125 xl:w-137.5 2xl:w-211.75 h-auto shrink-0"
          />
        </div>
      </Container>
    </section>
  );
}