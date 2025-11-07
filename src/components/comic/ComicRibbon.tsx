// components/comic/ComicRibbon.tsx
"use client";
import { motion, type Variants, type Transition } from "framer-motion";
import HighlightLetters from "../../utility/HighLightLetters";

type RibbonProps = {
  title: string;
  indices?: number[];
  containerClass?: string;
  textClass?: string;
  variants?: Variants;
  transition?: Transition;
};

export function ComicRibbon({
  title,
  indices = [1, 4, 7, 11, 12],
  containerClass = "absolute -top-10 left-6 right-24 z-30",
  textClass = "font-heading tracking-wider text-xl md:text-3xl",
  variants = { hover: { rotate: -6, y: -8 } },
  transition = { type: "spring", stiffness: 300, damping: 20 },
}: RibbonProps) {
  return (
    <motion.div initial={{ rotate: -10, y: -12 }} variants={variants} transition={transition} className={containerClass}>
      <div className="inline-flex items-center gap-3 bg-white text-black py-3 px-5 shadow-[0_8px_0_0_rgba(0,0,0,0.6)]">
        <span className={textClass}>
          <HighlightLetters text={title} indices={indices} className="font-menu" />
        </span>
      </div>
    </motion.div>
  );
}
