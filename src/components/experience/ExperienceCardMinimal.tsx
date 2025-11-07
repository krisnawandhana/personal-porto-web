"use client";
import { motion } from "framer-motion";
import { ComicBadge } from "../comic/ComicBadge";
import React from "react";

type ExperienceCardProps = {
  title: string;
  period: string;
  children: React.ReactNode;
};

export default function ExperienceCardMinimal({
  title,
  period,
  children,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="
        relative mt-16 z-[1] overflow-visible
        transition-all duration-300
      "
    >
      {/* ===== Inner Container ===== */}
      <div
        className="
          relative bg-gradient-to-r from-background to-primary/30 via-primary/10 bg-[length:200%_200%]
          border border-white/15 rounded-3xl overflow-hidden hover:border-primary
          text-white p-8 md:p-10
        "
      >
        {/* Persona underline */}
        <motion.div
          layoutId="persona-line"
          className="
            absolute bottom-[2px] left-[2px] z-[2]
            w-[calc(100%-4px)] h-[3px]
            rounded-full pointer-events-none
          "
        />

        {/* Content */}
        <div className="mt-2">
          <p className="text-primary font-bold text-xl tracking-widest mb-3">
            {period}
          </p>
          <div className="text-2xl leading-relaxed font-main-text max-w-3xl">
            {children}
          </div>
        </div>
      </div>

      {/* ===== Title Ribbon ===== */}
      <motion.div
        initial={{ rotate: -4, y: -4 }}
        whileHover={{ rotate: -1, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className="
          absolute -top-5 left-6 z-[3]
          bg-white text-black font-extrabold px-5 py-2 rounded-sm
          shadow-[3px_3px_0_rgba(0,0,0,0.8)] font-heading tracking-wide text-lg
        "
      >
        {title}
      </motion.div>

      {/* ===== Persona Exclamation Badge ===== */}
      <motion.div
        className="absolute right-6 top-4 z-[3] pointer-events-none will-change-transform"
        initial={{ rotate: 8 }}
        whileHover={{ rotate: 0, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ComicBadge />
      </motion.div>
    </motion.div>
  );
}
