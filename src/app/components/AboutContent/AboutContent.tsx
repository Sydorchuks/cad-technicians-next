"use client";

import { useState } from "react";
import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";
import "../../styles/vertical-lines.css";

const paragraphs = [
  "When it comes to accurate AutoCAD drawings, you can’t afford to make a mistake or spend massive amounts of time on it. How do you find the balance? At Survey Drafters we take out the guesswork by using your field data to create high-quality PDF and DWG files. We save you time and money, allowing you to maximize your business and increase client satisfaction.",
  "Think about your most recent client - picture in your mind how long it took for you to take field measurements and how much longer it was to produce your AutoCAD drawings. Did you have other clients that had to wait until this particular project was finished? Did it take longer than you thought it would?",
  "When it comes to running a successful land surveying company, you have to navigate a fine balance of efficiency and quality, all the while trying to build your business. For most, they find they need a partner to turn to.",
  "That’s where Survey Drafters comes in, with a team of experienced drafters at the ready to turn your data into a completed project. How can you benefit?",
];

const benefits = [
  "You save on overhead - no longer do you have to rent a large office space for all of your drafters",
  "You save time - we take the AutoCAD work off of your hands",
  "You increase client satisfaction - our goal is to complete your drawings efficiently, allowing you to complete your projects more quickly",
  "You save money - stop paying for expensive software licensing and let Survey Drafters do the work",
];

const finalParagraph =
  "We’ve partnered with businesses across the nation and have an easy online process to get your project started right away. Stop spending your time sitting in front of a computer and start building your business!";

function AboutContentDecor() {
  return (
    <>
      <div className="absolute right-0 top-4 z-30 hidden w-[72%] xl:flex xl:top-16 2xl:top-20 desktop:top-25.25">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute top-0 vertical-line-right z-30 hidden h-full xl:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute left-0 top-4 z-30 hidden w-[36%] xl:flex xl:top-160 2xl:top-190 desktop:top-215.25">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute bottom-6.5 left-0 z-30 w-full md:bottom-8.5 lg:bottom-10.5 xl:bottom-10 2xl:bottom-12 desktop:bottom-14.5 [&>div>div]:gap-4">
        <DecorLines count={4} position="bottom" direction="horizontal" />
      </div>
    </>
  );
}

function BenefitsList() {
  return (
    <ul className="space-y-1.5">
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-start gap-3 desktop:gap-3.5">
          <span className="shrink-0 leading-6.5 text-primary">•</span>
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  );
}

function TextBody() {
  return (
    <>
      <p>{paragraphs[0]}</p>
      <div className="h-8 2xl:h-10 desktop:h-13" />

      <p>{paragraphs[1]}</p>
      <div className="h-5 2xl:h-6 desktop:h-6.5" />

      <p>{paragraphs[2]}</p>
      <div className="h-5 2xl:h-6 desktop:h-6.5" />

      <p>{paragraphs[3]}</p>
      <div className="h-5 2xl:h-6 desktop:h-6.5" />

      <BenefitsList />

      <div className="h-5 2xl:h-6 desktop:h-6.5" />
      <p>{finalParagraph}</p>
    </>
  );
}

function ToggleArrow({
  isExpanded,
  onClick,
}: {
  isExpanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isExpanded ? "Show less" : "Show more"}
      className={`mx-auto mt-3 block h-0 w-0 border-x-[7px] border-t-10 border-x-transparent border-t-primary transition-transform duration-300 ${
        isExpanded ? "rotate-180" : ""
      }`}
    />
  );
}

function CollapsibleText() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block xl:hidden">
      <div className="mx-auto max-w-[288px] pt-8 font-body text-base font-normal leading-6.5 text-text-dark md:max-w-103 md:pt-16 md:text-md">
        <p>{paragraphs[0]}</p>
        <div className="h-10 md:h-13" />

        <div className="relative">
          <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isExpanded ? "max-h-450" : "max-h-70 md:max-h-52"
            }`}
          >
            <p>
              {paragraphs[1]}

              {!isExpanded && (
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  aria-label="Show more"
                  className="relative z-10 ml-2 inline-block h-0 w-0 -translate-y-0.5 border-x-[7px] border-t-10 border-x-transparent border-t-primary"
                />
              )}
            </p>

            <div className="h-6.5" />

            <p>{paragraphs[2]}</p>
            <div className="h-6.5" />

            <p>{paragraphs[3]}</p>
            <div className="h-6.5" />

            <BenefitsList />

            <div className="h-6.5" />
            <p>{finalParagraph}</p>
          </div>

          {!isExpanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-30 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.72)_35%,#fff_100%)] md:h-20" />
          )}

          {isExpanded && (
            <ToggleArrow
              isExpanded={isExpanded}
              onClick={() => setIsExpanded(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <section className="relative overflow-hidden bg-white pb-15 md:pb-35 lg:pb-40 xl:h-190 xl:pb-0 2xl:h-220 desktop:h-259">
      <AboutContentDecor />

      <picture className="relative z-10 block w-full xl:hidden">
        <source media="(max-width: 767px)" srcSet="/about-img-mobile.svg" />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet="/about-img-tablet.svg"
        />

        <img
          src="/about-img-tablet.svg"
          alt=""
          className="block h-32.25 w-full object-cover object-center md:h-68.5"
        />
      </picture>

      <Container className="relative z-10 h-full md:px-0 xl:px-5">
        <div className="flex flex-col items-center xl:relative xl:block xl:h-full">
          <img
            src="/about-img.svg"
            alt=""
            className="hidden object-cover xl:absolute xl:right-[80%] xl:top-0 xl:block xl:h-175 xl:w-125 xl:max-w-none 2xl:h-205 2xl:w-147.5 desktop:right-[70%] desktop:h-244.5 desktop:w-170.75 ultra:right-[85%] ultra:w-193.25"
          />

          <div className="hidden xl:block xl:pt-25 xl:pl-62.5 2xl:pt-25 2xl:pl-125 desktop:pt-47.5 desktop:pl-125 ultra:pt-45 ultra:pl-105.75">
            <div className="w-205 font-body text-[14px] font-normal leading-6 text-text-dark 2xl:w-230 2xl:text-md 2xl:leading-6.5 desktop:w-235.75">
              <TextBody />
            </div>
          </div>

          <CollapsibleText />
        </div>
      </Container>
    </section>
  );
}