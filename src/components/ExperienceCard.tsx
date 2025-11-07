"use client";
import { motion } from "framer-motion";
import { ComicRibbon } from "./comic/ComicRibbon";
import { ComicPanel } from "./comic/ComicPanel";
import { ComicBadge } from "./comic/ComicBadge";

type ExperienceCardProps = {
  title: string;
  titleIndices?: number[];
  ribbonProps?: Partial<React.ComponentProps<typeof ComicRibbon>>;
  panelProps?: Partial<React.ComponentProps<typeof ComicPanel>>;
  badgeProps?: Partial<React.ComponentProps<typeof ComicBadge>>;
  children: React.ReactNode;
  className?: string;
};

export default function ExperienceCard({
  title,
  titleIndices,
  ribbonProps,
  panelProps,
  badgeProps,
  children,
  className = "min-h-screen w-full text-white flex items-center justify-center p-6",
}: ExperienceCardProps) {
  return (
    <motion.div whileHover="hover" className={className}>
      <div className="relative w-full">
        <ComicRibbon title={title} indices={titleIndices} {...ribbonProps} />
        <ComicPanel {...panelProps}>{children}</ComicPanel>
        <ComicBadge {...badgeProps} />
      </div>
    </motion.div>
  );
}
