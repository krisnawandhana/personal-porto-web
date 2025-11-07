// // components/experience/ExperienceSlideshowP5.tsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { ComicPanel } from "../comic/ComicPanel";
// import { ComicRibbon } from "../comic/ComicRibbon";
// import { ComicBadge } from "../comic/ComicBadge";

// type Item = {
//   title: string;
//   content: React.ReactNode;
// };

// type Props = {
//   items: Item[];
//   /** lebar kartu responsif */
//   cardWidthClass?: string; // ex: "w-[92%] sm:w-[80%] lg:w-[70%]"
//   /** tinggi & padding panel (tidak mengubah style, hanya ukuran) */
//   minHeightsClass?: string; // ex: "min-h-[240px] md:min-h-[300px] lg:min-h-[340px]"
//   contentPaddingClass?: string; // ex: "absolute inset-0 p-5 md:p-7"
//   showDots?: boolean;
//   loop?: boolean; // default false (slideshow biasa)
// };

// export default function ExperienceSlideshowP5({
//   items,
//   cardWidthClass = "w-[92%] sm:w-[80%] lg:w-[70%]",
//   minHeightsClass = "min-h-[240px] md:min-h-[300px] lg:min-h-[340px]",
//   contentPaddingClass = "absolute inset-0 p-5 md:p-7",
//   showDots = true,
//   loop = false,
// }: Props) {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [index, setIndex] = useState(0);

//   const clamp = (n: number) =>
//     loop ? (n + items.length) % items.length : Math.max(0, Math.min(n, items.length - 1));

//   const scrollTo = (i: number, smooth = true) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const child = el.children[i] as HTMLElement | undefined;
//     if (!child) return;
//     el.scrollTo({
//       left: child.offsetLeft - (el.clientLeft ?? 0),
//       behavior: smooth ? "smooth" : "auto",
//     });
//     setIndex(i);
//   };

//   const next = () => scrollTo(clamp(index + 1));
//   const prev = () => scrollTo(clamp(index - 1));

//   // sinkronkan index saat user geser manual
//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     let t: number | null = null;

//     const onScroll = () => {
//       if (t) cancelAnimationFrame(t);
//       t = requestAnimationFrame(() => {
//         const center = el.scrollLeft + el.clientWidth / 2;
//         let best = 0,
//           bestDist = Infinity;
//         Array.from(el.children).forEach((c, i) => {
//           const rect = (c as HTMLElement).getBoundingClientRect();
//           const mid = (c as HTMLElement).offsetLeft + rect.width / 2;
//           const dist = Math.abs(mid - center);
//           if (dist < bestDist) {
//             best = i;
//             bestDist = dist;
//           }
//         });
//         setIndex(best);
//       });
//     };

//     el.addEventListener("scroll", onScroll, { passive: true });
//     return () => {
//       el.removeEventListener("scroll", onScroll);
//       if (t) cancelAnimationFrame(t);
//     };
//   }, []);

//   // jaga tetap center saat resize
//   useEffect(() => {
//     const el = trackRef.current;
//     if (!el) return;
//     const ro = new ResizeObserver(() => scrollTo(index, false));
//     ro.observe(el);
//     return () => ro.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index]);

//   return (
//     <section
//       className="relative w-full"
//       role="region"
//       aria-roledescription="carousel"
//       aria-label="Experience slideshow"
//     >
//       {/* Track */}
//       <div
//         ref={trackRef}
//         className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
//         tabIndex={0}
//         onKeyDown={(e) => {
//           if (e.key === "ArrowRight") {
//             e.preventDefault();
//             next();
//           }
//           if (e.key === "ArrowLeft") {
//             e.preventDefault();
//             prev();
//           }
//         }}
//         aria-live="polite"
//       >
//         {items.map((it, i) => (
//           <article
//             key={i}
//             className={`snap-center shrink-0 ${cardWidthClass} relative`}
//             aria-label={it.title}
//           >
//             {/* Ribbon (styling tetap) */}
//             <ComicRibbon
//               title={it.title}
//               className="absolute -top-7 left-4 right-24 z-30"
//               textClass="font-heading tracking-wide text-sm md:text-lg"
//             />

//             {/* Panel (styling tetap), ukuran dikontrol via props */}
//             <ComicPanel
//               minHeights={{
//                 base: minHeightsClass.split(" ")[0] || "min-h-[240px]",
//                 md: (minHeightsClass.split(" ").find((c) => c.startsWith("md:")) as string) || "md:min-h-[300px]",
//                 lg: (minHeightsClass.split(" ").find((c) => c.startsWith("lg:")) as string) || "lg:min-h-[340px]",
//               }}
//               contentClass={contentPaddingClass}
//             >
//               <div className="text-white/95 text-[13px] md:text-sm leading-snug md:leading-normal max-w-[58ch]">
//                 {it.content}
//               </div>
//             </ComicPanel>

//             {/* Badge (styling tetap) */}
//             <ComicBadge className="absolute right-0 -top-2" />
//           </article>
//         ))}
//       </div>

//       {/* Arrows */}
//       <button
//         aria-label="Previous"
//         onClick={prev}
//         className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
//       >
//         ‹
//       </button>
//       <button
//         aria-label="Next"
//         onClick={next}
//         className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_4px_0_rgba(0,0,0,0.6)] hover:bg-white"
//       >
//         ›
//       </button>

//       {/* Dots */}
//       {showDots && (
//         <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 flex gap-2">
//           {items.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to slide ${i + 1}`}
//               onClick={() => scrollTo(i)}
//               className={`h-2.5 w-2.5 rounded-full transition ${
//                 index === i ? "bg-white" : "bg-white/40 hover:bg-white/70"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
