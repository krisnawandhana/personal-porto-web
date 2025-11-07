"use client";
import React from "react";

export default function Arrows({
  show,
  onPrev,
  onNext,
  onPause,
  onResume,
}: {
  show: boolean;
  onPrev: () => void;
  onNext: () => void;
  onPause: () => void;
  onResume: () => void;
}) {
  if (!show) return null;
  return (
    <>
      <button
        aria-label="Previous slide"
        onClick={() => { onPause(); onPrev(); setTimeout(onResume, 500); }}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
      >
        ‹
      </button>
      <button
        aria-label="Next slide"
        onClick={() => { onPause(); onNext(); setTimeout(onResume, 500); }}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
      >
        ›
      </button>
    </>
  );
}
