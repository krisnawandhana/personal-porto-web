"use client";
import { motion, type Variants } from "framer-motion";

export default function PersonaAvatar({
  src = "/avatar.jpg",
  alt = "avatar",
  size = 260, // px
}: { src?: string; alt?: string; size?: number }) {
  const container: Variants = {
    rest: {},
    hover: {},
  };

  const photo: Variants = {
    rest:  { y: 0, rotate: 0, scale: 1 },
    hover: { y: -10, rotate: -2, scale: 1.03,
      transition: { type: "spring", stiffness: 420, damping: 20 } }
  };

  const haloParallax: Variants = {
    rest:  { x: 0, y: 0, rotate: 0, opacity: 1 },
    hover: { x: -4, y: 4, rotate: 1,
      transition: { type: "spring", stiffness: 300, damping: 22, delay: 0.02 } }
  };

  const pulse: Variants = {
    rest:  { opacity: 0, scale: 1 },
    hover: { opacity: 0.45, scale: 1.12, transition: { duration: 0.35 } }
  };

  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      variants={container}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Parallax halo (garis putih tebal di luar) */}
      <motion.span
        variants={haloParallax}
        className="absolute -inset-2 rounded-full border-[6px] border-white"
      />

      {/* Foto dengan border hitam (stroke dalam) */}
      <motion.img
        variants={photo}
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full rounded-full object-cover border-[6px] border-black shadow-[0_12px_0_rgba(0,0,0,0.6)]"
      />

      {/* Shine sweep (bar miring yang melintas cepat) */}
      <motion.span
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        <span className="absolute -left-1/3 top-0 h-full w-1/3 rotate-12
                         bg-white/20 blur-[2px]" />
      </motion.span>

      {/* Pulse ring tipis saat hover */}
      <motion.span
        variants={pulse}
        className="pointer-events-none absolute -inset-2 rounded-full border-2 border-white/70"
      />
    </motion.div>
  );
}
