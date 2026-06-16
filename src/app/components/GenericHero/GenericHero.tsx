import Container from "../../components/ui/Container/Container";
import BackgroundTitle from "../ui/BackgroundTitle/BackgroundTitle";
import DecorLines from "../ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

interface Props {
  bgText: string;
  title: string;
  description?: React.ReactNode;
  descriptionClassName?: string;
  heightClassName?: string;
}

const defaultHeightClassName = "h-145 md:h-122 lg:h-175 xl:h-210";

function GenericHeroDecor() {
  return (
    <>
      <div className="absolute top-0 vertical-line-left hidden h-full opacity-15 md:block">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-left-2 hidden h-full opacity-15 md:block">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute top-0 left-87.5 hidden h-97.5 opacity-15 md:block desktop:left-243.75 desktop:h-210 ultra:left-319.5">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute vertical-line-right h-screen opacity-15 max-sm:hidden">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute bottom-4 left-0 z-0 w-full opacity-15 md:hidden">
        <DecorLines count={7} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-4 left-0 z-0 hidden w-full opacity-15 md:block xl:hidden">
        <DecorLines count={4} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-6 left-0 z-0 hidden w-full opacity-15 xl:block">
        <DecorLines count={10} position="bottom" direction="horizontal" />
      </div>
    </>
  );
}

export default function GenericHero({
  bgText,
  title,
  description,
  descriptionClassName = "",
  heightClassName = defaultHeightClassName,
}: Props) {
  return (
    <section className={`relative overflow-hidden bg-primary ${heightClassName}`}>
      <BackgroundTitle
        variant="dark"
        className="top-20 text-bg-sm md:top-30 md:text-bg-md lg:top-45 lg:text-[340px] xl:text-bg-lg 2xl:left-0 2xl:top-46.5 ultra:left-1/9"
      >
        {bgText}
      </BackgroundTitle>

      <GenericHeroDecor />

      <Container>
        <div className="relative z-10 h-full">
          <div className="absolute left-1/2 top-30 flex w-full -translate-x-1/2 flex-col items-center text-center md:top-40 lg:top-79 xl:top-91 2xl:top-95.75">
            <h1 className="max-w-full font-lora text-4xl font-normal uppercase leading-none text-white md:text-7xl lg:text-[96px] xl:text-[110px] 2xl:text-9xl">
              {title}
            </h1>

            {description && (
              <p
                className={`mt-5 w-full max-w-78.25 font-body text-base leading-6.5 text-white md:mt-7 md:max-w-lg lg:max-w-155 xl:max-w-180 2xl:mt-10 2xl:max-w-242.5 2xl:text-md ${descriptionClassName}`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}