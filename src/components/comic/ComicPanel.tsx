// components/comic/ComicPanel.tsx
"use client";
import { motion, type Variants, type Transition } from "framer-motion";

type ComicPanelProps = {
  /** Polygon dalam format "x,y x,y ..." untuk SVG */
  polygonPoints?: string;
  /** Polygon persentase untuk clip-path (pakai "_" untuk spasi) */
  clipPathPercent?: string;
  /** Polygon outline (sedikit lebih keluar) */
  outlinePoints?: string;
  minHeights?: { base?: string; md?: string; lg?: string };
  panelClass?: string;
  contentClass?: string;
  variants?: Variants;
  transition?: Transition;
  children?: React.ReactNode;
};

const DEFAULT_POINTS = "3,31 10,40 14,33 18,39 21,12 88,12 97,73 23,44 20,52 14,43 11,47";
const DEFAULT_OUTLINE = "2,31 11,47 3,31 10,41 14,33 14,33 18,39 21,12 88,12 97,73 23,44 20,52 14,43 11,47";
const DEFAULT_CLIP = "3%_31%,_10%_40%,_14%_33%,_19%_40%,_22%_12%,_88%_13%,_96%_71%,_23%_44%,_20%_52%,_14%_43%,_11%_47%";

export function ComicPanel({
  polygonPoints = DEFAULT_POINTS,
  outlinePoints = DEFAULT_OUTLINE,
  clipPathPercent = DEFAULT_CLIP,
  minHeights = { base: "min-h-[360px]", md: "md:min-h-[420px]", lg: "lg:min-h-[480px]" },
  panelClass = "bg-black text-white",
  contentClass = "absolute inset-0 px-14 sm:pt-6 sm:px-10 md:py-6 md:px-16 lg:px-24 xl:px-40",
  variants = { hover: { scale: 1.02 } },
  transition = { type: "spring", stiffness: 300, damping: 20 },
  children,
}: ComicPanelProps) {
  return (
    <motion.div variants={variants} transition={transition} className="relative z-10">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden>
        {/* Outline putih di belakang */}
        <polygon
          points={outlinePoints}
          fill="white"
          stroke="white"
          strokeWidth="12"
          strokeLinejoin="miter"
          className="[vector-effect:non-scaling-stroke]"
        />
        {/* Outline hitam di depan */}
        <polygon points={polygonPoints} fill="none" />
      </svg>

      <div
        className={[
          panelClass,
          `[clip-path:polygon(${clipPathPercent})]`,
          minHeights.base,
          minHeights.md,
          minHeights.lg,
          "relative",
        ].join(" ")}
      >
        <div className={contentClass}>
          <div className="max-w-[38ch] md:max-w-[72ch] ml-12 font-main-text md:text-3xl md:ml-32 text-base leading-tight md:leading-6 [text-wrap:balance] break-words hyphens-auto">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
