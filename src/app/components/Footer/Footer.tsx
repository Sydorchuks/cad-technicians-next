import Link from "next/link";
import Container from "@/app/components/ui/Container/Container";
import DecorLines from "@/app/components/ui/DecorLines/DecorLines";
import "@/app/styles/vertical-lines.css";


const footerLinks = [
  { label: "Private policy", href: "/privacy-policy" },
  { label: "Terms and condition", href: "/terms-and-conditions" },
];

const textLinkClass =
  "font-body text-[16px] leading-[26px] text-black whitespace-nowrap transition-opacity hover:opacity-70 xl:text-md";

function FooterDecor() {
  return (
    <>
      <div className="absolute bottom-0 vertical-line-right-2 z-30 hidden h-full lg:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-right z-30 hidden h-full lg:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-right z-30 hidden h-full opacity-40 md:flex lg:hidden">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute bottom-0 right-10.25 z-30 hidden h-full opacity-40 md:flex lg:hidden">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-white">
      <FooterDecor />

      <Container className="xl:max-w-300">
        <div className="flex flex-col items-center gap-8 py-10 md:gap-12 md:py-12 xl:flex-row xl:justify-between xl:gap-12 xl:pt-10 xl:pb-4 2xl:pt-8 ultra:pt-10">
            <ul className="flex items-center justify-center gap-5 md:w-full md:justify-start md:gap-8 xl:w-auto xl:gap-7">
                {footerLinks.map(({ label, href }) => (
                <li key={href}>
                    <Link href={href} className={textLinkClass}>
                    {label}
                    </Link>
                </li>
                ))}
            </ul>
          <a
            href="mailto:support@cadtechnicians.com"
            className="font-body text-[16px] leading-6.5 text-primary whitespace-nowrap transition-opacity hover:opacity-70 md:-mt-19 md:self-end xl:mt-0 xl:self-center xl:text-md"
          >
            support@cadtechnicians.com
          </a>

          <div className="flex items-center justify-center gap-4.75 xl:mr-20 2xl:mr-27.5">
            <span className="font-body text-md font-bold leading-6.5 text-black whitespace-nowrap">
              Developed by
            </span>

            <img
              src="/ficus-logo.svg"
              alt="Ficus"
              className="h-13.5 w-41 object-contain"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}