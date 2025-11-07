"use client";

import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";

type Item = Parameters<typeof ProjectCard>[0]["item"];

export default function ProjectCarousel({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>("[data-slide]");
    const slideWidth = slide ? slide.offsetWidth : el.clientWidth * 0.8;
    el.scrollBy({ left: (dir === "next" ? 1 : -1) * (slideWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Buttons */}
      <button
        onClick={() => scrollBy("prev")}
        aria-label="Previous"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black
                   shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
      >
        ‹
      </button>
      <button
        onClick={() => scrollBy("next")}
        aria-label="Next"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                   h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black
                   shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 pb-2 no-scrollbar"
      >
        {items.map((item) => (
          <div
            key={item.id}
            data-slide
            className="snap-center shrink-0 w-[85%] md:w-[46%] xl:w-[32%]"
          >
            <ProjectCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
