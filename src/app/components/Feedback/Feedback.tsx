"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../../styles/vertical-lines.css";
import "../../globals.css";

const feedbacks = [
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "ANGELA SANTAMARIA",
  },
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "JOHN JONES",
  },
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "OLEKSANDR USYK",
  },
];

const clients = ["/client-1.svg", "/client-2.svg"];

const displayedClients = Array.from(
  { length: 7 },
  (_, i) => clients[i % clients.length]
);

export default function Feedback() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlides = () => {
      setSlidesPerView(window.innerWidth >= 1280 ? 2 : 1);
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const arrowButtonClass = "absolute top-1/2 -translate-y-1/2 z-20 w-[21px] h-[42px] md:w-[28px] md:h-[54px] 2xl:w-[37px] 2xl:h-[71px]  transition-all duration-300 hover:opacity-70 hover:-translate-x-1";

  const arrowImageClass = "w-full h-full object-contain";

  return (
    <section className="relative overflow-hidden bg-white py-0 2xl:py-40">
      <div className="absolute hidden lg:flex top-0 vertical-line-right h-full z-30">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <div className="absolute hidden lg:flex bottom-0 vertical-line-right-2 h-221.25 z-30">
        <DecorLines count={1} position="right" direction="vertical" />
      </div>

      <Container className="relative">
        <div className="relative z-20 flex flex-col items-center">
          <div className="w-full mt-8.5 md:mt-20">
            <h2 className="section-title text-center lg:text-left">
              OUR FEEDBACK
            </h2>
          </div>

          <div className="relative mt-3 md:mt-12 2xl:mt-35 w-full py-8 md:py-12 2xl:py-14">

            <div className="absolute left-1/2 top-0 w-screen -translate-x-1/2">
              <DecorLines count={1} position="top" direction="horizontal"/>
            </div>

            <div className="absolute left-1/2 bottom-0 w-screen -translate-x-1/2">
              <DecorLines count={1} position="bottom" direction="horizontal"/>
            </div>

            <div className="relative mx-auto max-w-335">
              <button
                className={`${arrowButtonClass} feedback-prev left-0 xl:-left-15 2xl:left-0`}
                aria-label="Previous feedback"
              >
                <img
                  src="/arrow-left.svg"
                  alt=""
                  className={arrowImageClass}
                />
              </button>

              <button
                className={`${arrowButtonClass} feedback-next right-0 xl:-right-15 2xl:right-0`}
                aria-label="Next feedback"
              >
                <img
                  src="/arrow-right.svg"
                  alt=""
                  className={arrowImageClass}
                />
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".feedback-prev",
                  nextEl: ".feedback-next",
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                loop
                grabCursor
                observer
                observeParents
                resizeObserver
                watchOverflow={false}
                speed={600}
                slidesPerView={slidesPerView}
                slidesPerGroup={1}
                spaceBetween={slidesPerView === 2 ? 97 : 60}
                className="mx-auto max-w-298.25"
              >
                {feedbacks.map((item, index) => (
                  <SwiperSlide key={index}>
                    <article className="w-full max-w-147.75 mx-auto text-center px-12 xl:max-w-none xl:mx-0 xl:px-0 xl:text-left">
                      <h3 className="uppercase text-[16px] md:text-[26px] leading-6.5 text-text-dark">
                        {item.title}
                      </h3>

                      <p className="mt-4 md:mt-6 xl:mt-9.75 text-[14px] leading-5 md:text-md md:leading-6.5 text-text-dark">
                        {item.text}
                      </p>

                      <span className="mt-6 xl:mt-5.75 flex justify-center xl:justify-start text-base font-bold uppercase text-text-dark">
                        {item.author}
                      </span>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="mt-10 flex justify-center gap-3.75 xl:hidden">
                {feedbacks.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => swiperRef.current?.slideToLoop(i)}
                    className={`size-3 rounded-full transition-colors ${
                      i === activeIndex
                        ? "bg-primary"
                        : "bg-gray-idle"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="
              relative mt-4.25 md:mt-12 ml-auto w-full bg-bg-gray px-5 md:px-10 py-16
              before:absolute before:top-0 before:right-full before:h-full before:w-screen before:bg-bg-gray before:content-['']
              after:absolute after:top-0 after:left-full after:h-full after:w-screen after:bg-bg-gray after:content-['']
              lg:before:hidden lg:after:w-screen
            "
          >
            <h3 className="absolute left-12 md:left-23 lg:-left-6 top-14 font-lora font-normal uppercase text-text-dark text-[36px] md:text-[60px] lg:text-[70px] leading-none">
              OUR CLIENTS
            </h3>

            <div className="mt-17 md:mt-30 grid grid-cols-4 justify-items-center gap-y-7.5 gap-x-8.75 md:gap-y-14 md:gap-x-17.5 2xl:flex 2xl:ml-20 2xl:items-center 2xl:gap-21 2xl:flex-wrap">
              {displayedClients.map((client, i) => (
                <img
                  key={i}
                  src={client}
                  alt=""
                  className="object-contain opacity-72 w-10.5 h-10.75 md:w-20.5 md:h-21 2xl:w-24.75 2xl:h-25.25"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}