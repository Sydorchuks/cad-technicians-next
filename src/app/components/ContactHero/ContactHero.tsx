import Container from "../ui/Container/Container";

export default function ContactHero() {
  return (
    <section className="relative h-96.5 w-full overflow-hidden bg-white md:h-130 lg:h-155 xl:h-180 2xl:h-197.5 desktop:h-219.75">
      <Container className="relative h-full">
        <div className="absolute left-3.5 md:left-0 top-29.25 z-10 md:top-37.5 lg:top-47.5 xl:top-58.75 2xl:top-67.5 desktop:left-11.5 desktop:top-73">
          <h2 className="font-lora text-2xl font-normal uppercase leading-none text-text-dark 
              md:text-[40px] lg:text-[76px] xl:text-[92px] 2xl:text-[108px] desktop:text-9xl desktop:leading-38.5"
          >
            CONTACT US
          </h2>

          <p className="mt-5 w-57.25 font-body text-[14px] font-normal leading-4.5 md:leading-6.5
             text-text-dark md:w-80.5 md:text-base lg:w-125 xl:w-152.5 xl:text-md 2xl:w-175 desktop:w-188.25"
          >
            Getting started with us couldn’t be easier, but we understand if you have a few questions.
            Feel free to reach out and let us know how we can help.
          </p>

          <h3 className="mt-9 font-lora text-md md:text-[30px] lg:text-[35px] font-bold uppercase 
              leading-none text-text-dark md:mt-16.25 lg:mt-32 xl:mt-36 2xl:mt-32 desktop:mt-24"
          >
            EMAIL
          </h3>

          <a
            href="mailto:support@cadtechnicians.com"
            className="md:mt-2.25 xl:mt-4.25 block w-fit font-body text-[16px] font-normal 
              leading-6.5 text-primary transition-opacity hover:opacity-70 md:text-[20px] 
              md:leading-9 lg:text-[32px] lg:leading-10.5 xl:text-[36px] xl:leading-11.5 
              2xl:text-[30px] 2xl:leading-10 desktop:text-md desktop:leading-6.5"
          >
            support@cadtechnicians.com
          </a>
        </div>

        <img
          src="/contact-hero-img.svg"
          alt=""
          className="absolute scale-[2] md:scale-100 left-90 -top-14 z-0 h-96.5 w-90 object-contain
            opacity-70 md:left-62.5 md:top-20 md:h-110 md:w-158.25 lg:left-130 lg:top-23.75 lg:h-130 lg:w-180
            xl:left-160 xl:top-20 xl:h-160 xl:w-205 2xl:left-190 2xl:top-8.75 2xl:h-195 2xl:w-217.5 
            desktop:left-215.5 desktop:top-5.25 desktop:h-214.5 desktop:w-225.25 desktop:opacity-100"
        />
      </Container>
    </section>
  );
}