import Container from "../../components/ui/Container/Container";
import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import DecorLines from "../ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

const steps = [
  {
    id: 1,
    icon: "/hiw-1.svg",
    text: "Register your account through a fast, easy, and secure process. We’ve worked with dozens of land surveying businesses across the country."
  },
  {
    id: 2,
    icon: "/hiw-2.svg",
    text: "Upload your data files. We’ll create an AutoCAD drawing for you to approve. Survey Drafters works efficiently to reduce your turnaround time with clients."
  },
  {
    id: 3,
    icon: "/hiw-3.svg",
    text: "Submit your payment through our secure system. Our low prices save you time and overhead, allowing you to focus on building your business."
  },
  {
    id: 4,
    icon: "/hiw-4.svg",
    text: "Receive your professionally generated PDF and DWG files. Everything is completed electronically for your convenience."
  }
];

export default function HomeHowItWorks() {
  return (
    <section className="relative py-10 2xl:py-20 overflow-hidden bg-white">

      <div className="absolute hidden lg:flex top-0 vertical-line-left h-full z-0">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute hidden lg:flex top-0 vertical-line-right h-full z-0">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute hidden lg:flex left-0 lg:top-210 xl:top-185 2xl:top-205 w-full z-0">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute hidden lg:flex right-0 lg:top-207 xl:top-182 2xl:top-202 lg:w-250 2xl:w-413 ultra:w-485.5 z-0">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute left-0 top-137.5 md:top-150 w-full lg:hidden">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute left-0 top-202.5 md:top-208.75 w-full lg:hidden">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute left-0 top-270 w-full lg:hidden">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <Container className="relative h-full">
        <BackgroundTitle
          variant="light"
          className="
            left-1/2 top-0 xl:top-0 -translate-x-1/2 xl:-translate-x-150  2xl:translate-x-0 ultra:-translate-x-70 
            text-bg-sm md:text-bg-md lg:text-[250px] xl:text-bg-lg ultra:text-bg-xl lg:leading-[0.85] text-center whitespace-normal
            2xl:left-0 2xl:top-0 2xl:leading-[0.9] 2xl:whitespace-nowrap opacity-66"
        >
          <span className="block xl:inline">HOW IT</span>
          <span className="block xl:inline">WORKS</span>
        </BackgroundTitle>

        <div className="relative z-20 flex flex-col items-center pt-21.25 md:pt-25 lg:pt-40 xl:pt-37.5 2xl:pt-47.5">
          <h2
            className="
              font-lora font-normal uppercase text-text-dark
              text-[36px] md:text-[60px] leading-17.5 text-center lg:text-8xl lg:leading-34.5 xl:text-8xl 2xl:text-9xl 2xl:leading-34.5"
          >
            HOW IT WORKS
          </h2>

          <div
            className="
              2xl:mt-27.5 xl:mt-45 lg:mt-50 md:mt-40 mt-25 grid grid-cols-1 lg:items-center items-start gap-y-10 md:gap-y-15 
              translate-x-0 md:-translate-x-10 lg:translate-x-0 lg:grid-cols-2 lg:gap-x-30 2xl:gap-x-45 2xl:gap-y-30"
          >
            {steps.map((step) => (
              <article
                key={step.id}
                className="relative w-[320px] md:w-142.5 lg:w-86 min-h-45 2xl:w-132.5 2xl:min-h-55"
              >
                <span
                  className="
                    absolute left-0 top-0 font-lora font-bold text-number-sm md:text-number-lg leading-none
                    text-light-alt pointer-events-none select-none"
                >
                  {step.id}
                </span>

                <div className="relative pl-17.5 md:pl-17.5 pt-6 md:pt-2 2xl:pl-18 2xl:pt-3">
                  <img
                    src={step.icon}
                    alt=""
                    className="object-contain w-16 h-16 md:w-20.75 md:h-20.75 2xl:w-23 2xl:h-23"
                  />

                  <p className="mt-4.25 md:leading-6.25 text-text-dark text-base md:text-lg">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
