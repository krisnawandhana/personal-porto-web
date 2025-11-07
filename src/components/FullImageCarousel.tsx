"use client";
import React from "react";
import type { CarouselProps } from "./carousel/type";
import SlideCard from "./carousel/SlideCard";
import Arrows from "./carousel/Arrows";
import Indicators from "./carousel/Indicators";
import { useInfiniteCarousel } from "./carousel/useInfiniteCarousel";

export default function FullImageCarousel({
  slides,
  autoPlay = true,
  interval = 3500,
  aspect = "aspect-[16/9]",
  pauseOnHover = true,
  pauseOnInteraction = true,
  className = "",
}: CarouselProps) {
  const {
    viewportRef,
    trackRef,
    index,
    realLen,
    realActive,
    next,
    prev,
    pause,
    resume,
    scrollToIndex,
  } = useInfiniteCarousel({
    slides,
    autoPlay,
    interval,
    pauseOnHover,
    pauseOnInteraction,
  });

  // siapkan array extended sesuai hook (akses via trackRef.children)
  const data = slides.length >= 2 ? slides : [...slides, ...slides];
  const extended = data.length ? [data[data.length - 1], ...data, data[0]] : [];

  const goToReal = (realIndex: number) => scrollToIndex(realIndex + 1, true);

  return (
    <div
      ref={viewportRef}
      className={`relative w-full outline-none ${className}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
        if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
      }}
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar"
        aria-live="polite"
      >
        {extended.map((s, i) => (
          <SlideCard
            key={`${s.src}-${i}`}
            slide={s}
            aspect={aspect}
            ariaLabel={
              (i === 0 && "clone of last") ||
              (i === extended.length - 1 && "clone of first") ||
              `slide ${i}`
            }
          />
        ))}
      </div>

      <Arrows
        show={realLen > 0}
        onPrev={prev}
        onNext={next}
        onPause={pause}
        onResume={resume}
      />

      <Indicators
        count={realLen}
        active={realActive}
        goTo={goToReal}
        onPause={pause}
        onResume={resume}
      />
    </div>
  );
}
