"use client";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import HighlightLetters from "../utility/HighLightLetters";

export default function Home() {
  const toRotate = ["Web Developer", "Full-stack Engineer", "Informatics Student", "Tech Enthusiast"];
  const period = 200;

  const [txt, setTxt] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typewriterRef = useRef<HTMLHeadingElement>(null);

  const navigate = (path: string) => {
    window.location.href = path;
  }

  useEffect(() => {
    let ticker: ReturnType<typeof setTimeout>;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];
      const updatedTxt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
      setTxt(updatedTxt);

      let delta = 200 - Math.random() * 100;
      if (isDeleting) delta /= 2;

      if (!isDeleting && updatedTxt === fullTxt) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && updatedTxt === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        delta = 500;
      }

      ticker = setTimeout(() => tick(), delta);
    };

    ticker = setTimeout(() => tick(), 200);
    return () => clearTimeout(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txt, isDeleting, loopNum]);

  // Motion variants (masuk halus + sedikit hover energy)
  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } }
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 22 } }
  };

  return (
    <main className="overflow-x-hidden mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      {/* Text section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        whileHover="hover"
        className="relative space-y-3 md:space-y-4 text-center md:text-left px-10 font-heading"
      >
        {/* Ribbon kecil miring ala Persona */}
        <motion.div
          variants={item}
          initial={{ rotate: -10, y: -6 }}
          animate={{ rotate: -6, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-block -rotate-6 bg-white text-black px-3 py-1 shadow-[0_6px_0_0_rgba(0,0,0,0.85)]"
        >
          <span className="text-xs md:text-sm tracking-[0.2em] font-extrabold">
            PHANTOM DEV // SHOWTIME
          </span>
        </motion.div>

        {/* Hello line */}
        <motion.p variants={item} className="text-white text-xl mt-1.5 md:text-2xl font-bold flex items-center gap-2 justify-center md:justify-start">
          Hello World, I&apos;m
        </motion.p>

        {/* H1 dua layer: stroke (bayangan) + fill (teks) */}
        <motion.h1 variants={item} className="relative inline-block">
          {/* Stroke layer (hitam) */}
          <motion.span
            aria-hidden
            className="absolute inset-0 translate-x-[3px] translate-y-[3px] text-black pointer-events-none select-none"
            whileHover={{ x: 4, y: 4, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
          </motion.span>
          {/* Fill layer (putih) */}
          <span className="relative text-white text-5xl">
            <HighlightLetters
              text="krisna Wandhana"
              indices={[0, 4, 8, 12, 13]}
              className="font-menu tracking-wide text-white"
            />
          </span>
          {/* Underline animasi */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            className="block h-1 mt-2 bg-primary origin-left"
          />
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={item} className="py-1">
          <h2
            ref={typewriterRef}
            className="typewrite text-lg md:text-2xl font-bold md:text-transparent bg-clip-text bg-gradient-to-r from-white to-primary"
          >
            <span className="wrap">{txt}</span>
          </h2>
        </motion.div>

        {/* Tagline komikal */}
        <motion.p
          variants={item}
          className="text-white text-xl md:text-2xl font-extrabold tracking-[0.25em] uppercase"
        >
          Welcome to my <span className="text-primary">Showtime</span>
          <span className="wave">!</span>
        </motion.p>

        {/* CTA (opsional) */}
        <motion.div variants={item} className="pt-2 flex gap-3 justify-center md:justify-start">
          <motion.button whileHover={{ y: -2, rotate: -1 }} whileTap={{ y: 0, rotate: 0, scale: 0.98 }}
            onClick={() => navigate("/experience")}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="-skew-x-6 relative inline-flex items-center px-5 py-2 bg-white text-black font-extrabold uppercase tracking-[0.2em] shadow-[0_8px_0_0_rgba(0,0,0,0.85)]">
            <span className="skew-x-6">View Work</span>
            <span className="absolute -inset-1 border-2 border-black -z-10" />
          </motion.button>
          <motion.button whileHover={{ y: -2, rotate: 1 }} whileTap={{ y: 0, rotate: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="-skew-x-6 relative inline-flex items-center px-5 py-2 bg-primary text-black font-extrabold uppercase tracking-[0.2em] shadow-[0_8px_0_0_rgba(0,0,0,0.85)]">
            <span className="skew-x-6">Contact</span>
            <span className="absolute -inset-1 border-2 border-black -z-10" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Avatar */}
      <motion.div
        className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-4 border-dark"
        style={{ perspective: 1000 }} // penting biar 3D kelihatan
        initial={false}
        whileHover="hover"
      >
        <motion.div
          className="relative w-full h-full rounded-full"
          style={{ transformStyle: "preserve-3d" }}
          variants={{
            rest: { rotateY: 0 },
            hover: { rotateY: 180 }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* FRONT SIDE */}
          <div className="absolute inset-0 w-full h-full rounded-full backface-hidden overflow-hidden">
            <img
              src="/project/avatar-2.png"
              alt="avatar front"
              className="w-full h-full object-cover"
            />
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 w-full h-full rounded-full backface-hidden overflow-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <img
              src="https://preview.redd.it/8017ozu3io421.jpg?width=640&crop=smart&auto=webp&s=7e82436a33df6b151bf41a2b7ec1f6bf294e934c"
              alt="avatar back"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
