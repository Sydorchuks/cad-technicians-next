"use client";

import { cn } from "../../../../cn";
import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";
import Button from "../ui/Button/Button";
import "../../styles/vertical-lines.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function ContactBlock() {
  const greenBlock = {
    height: "h-105 md:h-150 xl:h-175 2xl:h-215.5",
    width: "xl:w-140 2xl:w-175",
    color: "bg-primary",
  };

  return (
    <section className="relative overflow-hidden bg-white py-0">
      <div className="absolute left-0 top-4 z-0 w-full md:top-18 2xl:top-24.5">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="md:block xl:hidden">
        <div className="absolute bottom-1 left-0 z-0 w-full md:bottom-5.25">
          <DecorLines count={4} position="bottom" direction="horizontal" />
        </div>

        <div className="absolute bottom-11 left-0 z-0 w-full md:bottom-17.5">
          <DecorLines count={1} position="bottom" direction="horizontal" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-0 hidden w-full xl:block">
        <DecorLines count={6} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute top-0 vertical-line-right z-30 hidden h-full opacity-40 md:flex lg:hidden">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute bottom-0 right-10.25 z-30 hidden h-225 opacity-40 md:flex lg:hidden">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-left z-30 hidden h-full opacity-20 md:flex lg:hidden">
        <DecorLines count={1} position="left" direction="vertical" />
      </div>

      <div className="absolute bottom-0 z-0 hidden h-256.5 2xl:left-250 xl:block ultra:left-327.75">
        <DecorLines count={1} position="center" direction="vertical" />
      </div>

      <div className="absolute top-45 z-30 hidden w-full bg-white/30 xl:block 2xl:top-58.75">
        <DecorLines count={1} position="top" direction="horizontal" />
      </div>

      <div className="absolute bottom-60 left-0 z-30 hidden w-175 opacity-15 xl:block 2xl:bottom-74.5 2xl:w-306">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-52 left-0 z-30 hidden w-187.5 bg-white/30 xl:block 2xl:bottom-60 2xl:w-335.25">
        <DecorLines count={1} position="bottom" direction="horizontal" />
      </div>

      <div className="absolute bottom-0 vertical-line-right-2 z-30 hidden h-full xl:block">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute top-0 vertical-line-right z-30 hidden h-full lg:flex">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <Container className="relative">
        <div className="relative z-20 pt-12.75 pb-18 md:pt-27.5 md:pb-30 xl:pt-35 2xl:pt-44.75 2xl:pb-35">
          <div className="relative flex flex-col items-center xl:flex-row xl:items-start xl:gap-25 2xl:gap-43">
            <div
              className={cn(
                "absolute left-[-100vw] top-0 w-screen",
                greenBlock.height,
                greenBlock.color
              )}
            />

            <div
              className={cn(
                "relative w-screen",
                greenBlock.width,
                greenBlock.height,
                greenBlock.color
              )}
            >
              <div className="mx-auto mt-9.25 max-w-134.5 text-center md:mt-17 xl:mx-0 xl:mt-20 xl:mr-10 2xl:mt-27 2xl:mr-0 2xl:text-left">
                <h2 className="font-lora text-[44px] font-normal leading-13 text-white uppercase md:text-[60px] md:leading-17.5 xl:text-[56px] xl:leading-17 2xl:text-[70px] 2xl:leading-22.5">
                  READY
                  <br />
                  TO START?
                </h2>

                <p className="mt-6 px-5 text-[16px] leading-6 text-white md:mt-10.25 md:px-0 md:text-[20px] md:leading-7.5 xl:max-w-112.5 2xl:max-w-none">
                  Working with Survey Drafters allows you to save time and focus
                  on building your business. With the ability to connect with us
                  online and have a team of experienced drafters at your
                  service, we think there&apos;s no better partnership.
                </p>

                <Button
                  variant="secondary"
                  className="mx-auto mt-6.75 h-9 w-39.5 text-[12px] md:mt-12 md:h-14.5 md:w-48.25 md:text-[14px] xl:h-14 xl:w-55 2xl:mx-0 2xl:mt-13 2xl:h-15.75 2xl:w-65.5 2xl:text-md"
                >
                  START PROJECT
                </Button>
              </div>
            </div>

            <FeedbackForm className="pt-12.5 md:pt-16.25 xl:pt-17.5 2xl:pt-25" />
          </div>
        </div>
      </Container>
    </section>
  );
}