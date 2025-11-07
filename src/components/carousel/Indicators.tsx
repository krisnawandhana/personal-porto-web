"use client";
import React from "react";

export default function Indicators({
  count,
  active,
  goTo,
  onPause,
  onResume,
}: {
  count: number;
  active: number; // 0..count-1 (real)
  goTo: (realIndex: number) => void;
  onPause: () => void;
  onResume: () => void;
}) {
  if (!count) return null;
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => { onPause(); goTo(i); setTimeout(onResume, 500); }}
          aria-label={`Go to slide ${i + 1}`}
          className={`h-2.5 w-2.5 rounded-full transition ${
            active === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  );
}
