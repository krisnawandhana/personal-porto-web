"use client";
import { motion, type Variants, type Transition } from "framer-motion";

type ComicBadgeProps = {
  className?: string;
  size?: number; // tinggi utama badge
  color?: string; // warna isi
  outlineColor?: string; // warna garis luar
  showRedBand?: boolean; // tampilkan pita merah tambahan
  variants?: Variants;
  transition?: Transition;
};

export function ComicBadge({
  className = "absolute right-1 -top-3 md:-top-10 z-40",
  size = 220,
  color = "black",
  outlineColor = "white",
  showRedBand = false,
  variants = { hover: { rotate: 0, y: -20 } },
  transition = {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.8,
    bounce: 0.3,
  },
}: ComicBadgeProps) {
  return (
    <motion.div
      initial={{ rotate: 4, y: -30 }}
      variants={variants}
      transition={transition}
      className={className}
    >
      <svg
        viewBox="0 0 220 640"
        style={{ height: `${size}px`, width: "auto" }}
        aria-hidden
      >
        <polygon
          points="30,10 210,50 160,480 40,450"
          fill={color}
          stroke={outlineColor}
          strokeWidth="16"
        />
        <rect
          x="55"
          y="500"
          width="120"
          height="90"
          fill={color}
          stroke={outlineColor}
          strokeWidth="16"
        />
        {showRedBand && (
          <rect x="52" y="495" width="126" height="18" fill="#ff0000" />
        )}
      </svg>
    </motion.div>
  );
}

export default ComicBadge;
