"use client";

import { useState } from "react";
import Container from "@/app/components/ui/Container/Container";
import DecorLines from "@/app/components/ui/DecorLines/DecorLines";
import PlayButton from "@/app/components/ui/PlayButton/PlayButton";
import "@/app/globals.css";
import "@/app/styles/vertical-lines.css";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const VIDEO_URL =
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  const VIDEO_PREVIEW =
    "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg";

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
        <div className="relative z-20 flex flex-col items-center pt-0 xl:pt-6.25 desktop:pt-8 desktop:mb-40 ultra:mb-10">

          <h2 className="light-bg-title">
            VIDEO GUIDES
          </h2>

          <div
            className="
              relative z-20
              mt-2.75 md:mt-6.5 lg:mt-10 xl:mt-12.5 desktop:mt-15 ultra:mt-8.5
              -mb-7 md:mb-8 lg:mb-0
              w-75.5 h-40.5 md:w-xl md:h-77.5 lg:w-190 lg:h-102.25 xl:w-225 xl:h-121.25 desktop:w-260.5 desktop:h-140.25 ultra:w-320.75 ultra:h-172.75
              overflow-hidden
            "
          >
            {isPlaying ? (
              <iframe
                src={VIDEO_URL}
                title="Video Guide"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={VIDEO_PREVIEW}
                  alt="Video preview"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
                <PlayButton onClick={() => setIsPlaying(true)} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}