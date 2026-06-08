import Container from "../../components/ui/Container/Container";
import DecorLines from "../ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

export default function Video() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:mt-10">

      <div className="hidden md:flex absolute top-0 vertical-line-left h-full z-0 lg:opacity-15 opacity-20">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="hidden md:flex absolute top-0 vertical-line-right h-full z-0 lg:opacity-15 opacity-20">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute left-0 top-5.5 md:top-12.25 w-full z-0 lg:opacity-15 opacity-20">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute left-0 top-53.5 md:top-104.5 lg:top-180.25 w-full z-0 lg:opacity-15 opacity-20">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute left-0 bottom-6 desktop:bottom-10.25 w-full z-0 lg:opacity-15 opacity-20">
        <div className="lg:hidden">
          <DecorLines count={5} position="bottom" direction="horizontal" />
        </div>

        <div className="hidden lg:block">
          <DecorLines count={12} position="bottom" direction="horizontal" />
        </div>
      </div>

      <Container className="relative h-full">
        <div className="relative z-20 flex flex-col items-center -translate-y-10 md:translate-y-0 pt-0 xl:pt-6.25 desktop:pt-8 desktop:mb-40 ultra:mb-10">
          <h2
            className="
              font-lora font-normal uppercase text-white text-center
              text-[36px] leading-10.75 md:text-[60px] md:leading-18 lg:text-[64px] lg:leading-19.25
              xl:text-[68px] xl:leading-20.5 desktop:text-[70px] desktop:leading-21"
          >
            VIDEO GUIDES
          </h2>

          <div
            className="
              relative z-20
              mt-2.75 md:mt-6.5 lg:mt-10 xl:mt-12.5 desktop:mt-15 ultra:mt-8.5
              -mb-7 md:mb-8 lg:mb-0 w-75.5 h-40.5 md:w-xl md:h-77.5
              lg:w-190 lg:h-102.25 xl:w-225 xl:h-121.25
              desktop:w-260.5 desktop:h-140.25 ultra:w-320.75 ultra:h-172.75
              bg-dark-frame-outline flex items-center justify-center"
          >
            <button
              type="button"
              className="
                w-10 h-10 md:w-18 md:h-18 lg:w-20 lg:h-20
                xl:w-22 xl:h-22 desktop:w-24 desktop:h-24 ultra:w-31.5 ultra:h-31.5
                rounded-full bg-dark-frame flex items-center justify-center cursor-pointer transition hover:scale-[1.1]"
            >
              <div
                className="
                  ml-0.5 w-0 h-0 border-t-[7px] border-b-[7px] border-l-11
                  md:border-t-12 md:border-b-12 md:border-l-18
                  lg:border-t-13 lg:border-b-13 lg:border-l-20
                  xl:border-t-15 xl:border-b-15 xl:border-l-22
                  desktop:border-t-16 desktop:border-b-16 desktop:border-l-24
                  ultra:border-t-[20.5px] ultra:border-b-[20.5px] ultra:border-l-31
                  border-t-transparent border-b-transparent border-l-white"
              />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}