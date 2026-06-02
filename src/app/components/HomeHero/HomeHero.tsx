import Container from "../../components/ui/Container/Container";
import BackgroundHeroTitle from "../ui/BackgroundHeroTitle/BackgroundHeroTitle";
import HighlightText from "../ui/HighlightText/HighlightText";

export default function HomeHero() {
  return (
    <section
      className="relative h-90 md:h-122 lg:h-187.5 xl:h-212.5 2xl:h-270 overflow-hidden bg-primary">

      <BackgroundHeroTitle className="top-15 md:top-27.5 lg:top-41.25 text-background-sm md:text-background-md lg:text-background-lg xl:text-background-xl 2xl:text-background-xxl">
        TECHNICIANS
      </BackgroundHeroTitle>

      <Container>
        <div className="relative z-10 flex justify-between items-center md:items-start gap-0 md:gap-5 lg:gap-0 pt-10 md:pt-37.25 lg:pt-52">
          <div className="w-full max-w-85 mx-auto md:mx-0 md:w-69.25 md:max-w-none lg:w-130 xl:w-150 2xl:w-171 shrink-0">
            <p
              className="font-body text-md-lg lg:text-3xl xl:text-4xl 2xl:text-5xl leading-6 lg:leading-10.5 xl:leading-11.5 2xl:leading-12.75
                mt-20 md:mt-15.5 lg:mt-25 xl:mt-35 2xl:mt-70 text-left font-normal text-white"
            >
              With decades of experience <br />working with land surveyors, <br /> we provide precise AutoCAD
              <br />drawings that offer <br />high-quality{" "}<HighlightText>professionalism</HighlightText>
              <br /> at a <HighlightText>reasonable price</HighlightText>
            </p>

            <button
              className="relative mt-3.25 lg:mt-7.5 xl:mt-8.75 2xl:mt-10
                text-sm-md lg:text-md xl:text-md 2xl:text-md-lg font-bold leading-6.5 uppercase
                text-white block text-left after:block after:w-22.5 lg:after:w-25 2xl:after:w-27.5
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