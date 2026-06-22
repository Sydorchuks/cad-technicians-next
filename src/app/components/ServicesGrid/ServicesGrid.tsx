import Container from "@/app/components/ui/Container/Container";
import DecorLines from "@/app/components/ui/DecorLines/DecorLines";
import "@/app/styles/vertical-lines.css";

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

const tabletLineClasses = [
  "top-[325px]",
  "top-[645px]",
  "top-[980px]",
  "top-[1285px]",
  "top-[1610px]",
  "top-[1930px]",
  "top-[2250px]",
];

const desktopColumnLines = ["left-2/9", "left-5/11", "left-5/7"];

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

      <div className="absolute left-0 top-125.25 z-0 hidden w-full 2xl:block">
        <DecorLines count={1} position="center" direction="horizontal" />
      </div>

      <div className="absolute bottom-7.75 left-0 z-0 hidden w-full 2xl:block">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>
    </>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative h-650 w-full overflow-hidden bg-white md:h-643.5 xl:h-425 2xl:h-248.5">
      <ServicesGridDecor />

      <Container className="relative h-full">
        <div className="pointer-events-none absolute inset-y-3.25 left-0 z-0 hidden h-full w-full xl:block 2xl:hidden">
          <div className="absolute left-1/2 top-0 h-full">
            <DecorLines count={1} direction="vertical" position="left" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-3.25 left-0 z-0 hidden w-full 2xl:block">
          {desktopColumnLines.map((className) => (
            <div key={className} className={`absolute top-0 h-full ${className}`}>
              <DecorLines count={1} direction="vertical" position="left" />
            </div>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 justify-items-center gap-12 pt-5 md:gap-y-20 md:pt-10 xl:grid-cols-2 xl:justify-items-start xl:gap-x-0 xl:gap-y-24 xl:pt-16 2xl:grid-cols-4 2xl:gap-y-28 2xl:pt-20.25">
          {services.map((item) => (
            <article
              key={item.title}
              className="
                flex w-full max-w-96 flex-col items-center text-center
                md:max-w-142.75 md:items-start md:text-left
                xl:w-80 xl:max-w-none xl:pl-10
                2xl:w-60 2xl:pl-4
              "
            >
              <div className="flex h-18.5 items-center justify-center md:justify-start">
                <img
                  src={item.icon}
                  alt=""
                  className={`size-18.5 object-contain ${item.iconClassName || ""}`}
                />
              </div>

              <h3
                className="
                  mt-7.5 max-w-90 font-lora text-[30px] font-bold uppercase leading-none text-text-dark
                  md:max-w-114
                  xl:mt-3.75 xl:min-h-19 xl:w-80 xl:max-w-none xl:text-[28px]
                  2xl:min-h-25.5 2xl:w-60 2xl:text-[26px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-6.5 max-w-81 font-body text-base leading-6.25 text-text-dark
                  md:w-142.75 md:max-w-none md:text-lg
                  xl:mt-0 xl:w-80 xl:text-md
                  2xl:w-60 2xl:text-base
                "
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}