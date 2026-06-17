import type { CSSProperties } from "react";
import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

const services = [
  {
    title: "EXPERIENCE",
    text: "Our professionals have decades of combined experience, ensuring your drawings are precisely what you need. We pride ourselves on the quality of our team",
    icon: "/icon-1.svg",
  },
  {
    title: "RELIABILITY",
    text: "At Survey Drafters we mean what we say, and every project we take on will be completed with unparalleled expertise. We’ve been in business for years and stand by our word",
    icon: "/icon-2.svg",
    iconClassName: "scale-[1.4]",
  },
  {
    title: "LOWER YOUR OVERHEAD",
    text: "Don’t worry about equipment or office overhead, as we handle the day to day necessities, allowing you to do what you do best. Often times success comes through the others you partner with.",
    icon: "/icon-3.svg",
  },
  {
    title: "PROFESSIONALISM",
    text: "The team at Survey Drafters always communicates with our clients from a place of respect and professionalism. We recognize that you’re an essential part of our success.",
    icon: "/icon-4.svg",
  },
  {
    title: "STREAMLINED SERVICE",
    text: "We make the land surveying process simple. All you have to do is provide us with your data and you’ll receive impeccable AutoCad drawings.",
    icon: "/icon-5.svg",
  },
  {
    title: "AUTOCAD LICENSING",
    text: "Software licensing can be expensive, so let Survey Drafters take care of that for you. Send us your data and we’ll use our own AutoCAD to complete the job.",
    icon: "/icon-6.svg",
  },
  {
    title: "EFFICIENCY",
    text: "Too many job sites to visit this week? Offload some of your time consuming tasks to us, where we’ll create your drawings and free up more time for you in the field.",
    icon: "/icon-7.svg",
  },
  {
    title: "TEAMWORK",
    text: "Survey Drafters is built from a dedicated team of drafters that love what they do. We work together to ensure your project is completed accurately and quickly.",
    icon: "/icon-8.svg",
  },
];

const desktopPositions = [
  { xlLeft: -200, left: 0, iconTop: 81, titleTop: 170, textTop: 272 },
  { xlLeft: 150, left: 400, iconTop: 81, titleTop: 170, textTop: 272 },
  { xlLeft: 470, left: 800, iconTop: 81, titleTop: 170, textTop: 272 },
  { xlLeft: 800, left: 1170, iconTop: 81, titleTop: 170, textTop: 272 },
  { xlLeft: -200, left: 0, iconTop: 535, titleTop: 624, textTop: 726 },
  { xlLeft: 150, left: 400, iconTop: 535, titleTop: 624, textTop: 726 },
  { xlLeft: 470, left: 800, iconTop: 535, titleTop: 624, textTop: 726 },
  { xlLeft: 800, left: 1170, iconTop: 535, titleTop: 624, textTop: 726 },
];

const tabletLineClasses = [
  "top-[325px]",
  "top-[645px]",
  "top-[980px]",
  "top-[1285px]",
  "top-[1610px]",
  "top-[1930px]",
  "top-[2250px]",
];

type ServiceCardVars = CSSProperties & {
  "--desktop-left": string;
  "--icon-top": string;
  "--title-top": string;
  "--text-top": string;
};

function ServicesGridDecor() {
  return (
    <>
      <div className="absolute top-0 vertical-line-left hidden h-full xl:flex">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-right hidden h-full xl:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      {tabletLineClasses.map((className) => (
        <div
          key={className}
          className={`absolute left-0 z-0 hidden w-full md:block xl:hidden ${className}`}
        >
          <DecorLines count={1} position="top" direction="horizontal" />
        </div>
      ))}

      <div className="absolute left-0 top-125.25 z-0 hidden w-full xl:block">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute bottom-7.75 left-0 z-0 hidden w-full xl:block">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>
    </>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative h-650 w-full overflow-hidden bg-white md:h-643.5 xl:h-248.5">
      <ServicesGridDecor />

      <Container className="relative h-full">
      <div className="absolute top-3.25 hidden h-220.75 xl:left-1/2 xl:block ">
        <DecorLines count={1} direction="vertical" position="left" />
      </div>

      <div className="absolute bottom-0 hidden h-220.75 xl:left-[86%] 2xl:left-3/4 xl:block">
        <DecorLines count={1} direction="vertical" position="left" />
      </div>

      <div className="absolute top-3.25 hidden h-220.75 left-1/7 2xl:left-1/4 xl:block">
        <DecorLines count={1} direction="vertical" position="left" />
      </div>
        <div className="relative z-10 grid grid-cols-1 justify-items-center gap-12 pt-5 md:h-full md:gap-0 md:pt-0 xl:block">
          {services.map((item, index) => {
            const position = desktopPositions[index];

            return (
              <article
                key={item.title}
                className="flex w-full max-w-96 flex-col items-center text-center 
                  md:relative md:h-75 md:max-w-none md:items-start md:text-left
                  xl:absolute xl:left-(--xl-left) 2xl:left-(--desktop-left) xl:h-auto xl:w-72.25"
                style={
                  {
                    "--xl-left": `${position.xlLeft}px`,
                    "--desktop-left": `${position.left}px`,
                    "--icon-top": `${position.iconTop}px`,
                    "--title-top": `${position.titleTop}px`,
                    "--text-top": `${position.textTop}px`,
                  } as ServiceCardVars
                }
              >
                <img
                  src={item.icon}
                  alt=""
                  className={`size-18.5 object-contain md:absolute md:left-16 md:top-10 xl:left-0 xl:top-(--icon-top) ${item.iconClassName || ""}`}
                />

                <h3 className="mt-7.5 max-w-90 font-lora text-[30px] font-bold uppercase leading-none text-text-dark md:absolute md:left-16 md:top-33.75 md:mt-0 md:max-w-114 xl:left-0 xl:top-(--title-top) xl:w-71.75 xl:max-w-none">
                  {item.title}
                </h3>

                <p className="mt-6.5 max-w-81 font-body text-base leading-6.25 text-text-dark md:absolute md:left-16 md:top-51 md:mt-0 md:w-142.75 md:max-w-none md:text-lg md:leading-6.25 xl:left-0 xl:top-(--text-top) xl:w-71.75">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}