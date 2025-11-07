"use client";
import React from "react";
import { truncate } from "./utils";
import type { Slide } from "./type";

export default function SlideCard({
  slide,
  aspect,
  ariaLabel,
}: {
  slide: Slide;
  aspect: string;
  ariaLabel?: string;
}) {
  return (
    <div
      className={`snap-center shrink-0 w-[100%] md:w-[80%] xl:w-[70%] ${aspect} relative rounded-2xl overflow-hidden bg-black`}
      role="group"
      aria-roledescription="slide"
      aria-label={ariaLabel}
    >
      <img
        src={slide.src}
        alt={slide.alt ?? "slide"}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />
      {(slide.caption || slide.alt || slide.github || slide.demo) && (
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none">
          {(slide.caption || slide.alt) && (
            <p className="text-sm md:text-base font-medium">
              {truncate(slide.caption ?? slide.alt ?? "", 160)}
            </p>
          )}
          {(slide.github || slide.demo) && (
            <div className="mt-3 flex gap-2 pointer-events-auto">
              {slide.demo && (
                <a
                  href={slide.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="-skew-x-6 inline-flex items-center px-3 py-1 bg-white text-black text-xs font-extrabold tracking-wider shadow-[0_6px_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 transition"
                  title="Live Demo"
                >
                  <span className="skew-x-6">Live</span>
                </a>
              )}
              {slide.github && (
                <a
                  href={slide.github}
                  target="_blank"
                  rel="noreferrer"
                  className="-skew-x-6 inline-flex items-center px-3 py-1 bg-primary text-black text-xs font-extrabold tracking-wider shadow-[0_6px_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 transition"
                  title="GitHub Repo"
                >
                  <span className="skew-x-6">GitHub</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
