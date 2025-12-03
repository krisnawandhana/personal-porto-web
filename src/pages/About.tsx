"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import HighlightLetters from "../utility/HighLightLetters";
import PersonaAvatar from "../components/PersonaAvatar";

interface Tech {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
}
interface Tool {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const tech: Tech[] = [
    { id: 1, name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png", status: "Advanced" },
    { id: 2, name: "CSS", imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png", status: "Advanced" },
    { id: 7, name: "Javascript", imageUrl: "https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png", status: "Advance" },
    { id: 3, name: "React", imageUrl: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png", status: "Advance" },
    { id: 4, name: "React Native", imageUrl: "https://reactnative.dev/img/header_logo.svg", status: "Advance" },
    { id: 11, name: "Expo", imageUrl: "https://images.seeklogo.com/logo-png/45/2/expo-go-app-logo-png_seeklogo-457073.png", status: "Advance" },
    { id: 5, name: "Tailwind", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", status: "Advance" },
    { id: 10, name: "Bootstrap", imageUrl: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png", status: "Intermediate" },
    { id: 6, name: "PHP", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png", status: "Beginner" },
    { id: 8, name: "Laravel", imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg", status: "Beginner" },
    { id: 9, name: "NodeJS", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png", status: "Advance" },
  ];

  const tools: Tool[] = [
    { id: 1, name: "Git", imageUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png", status: "Version Control" },
    { id: 2, name: "GitHub", imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png", status: "Git Hosting" },
    { id: 3, name: "NPM", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png", status: "Package Manager" },
    { id: 4, name: "Supabase", imageUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/supabase.png", status: "Database" },
    { id: 5, name: "Vercel", imageUrl: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", status: "Hosting & Deployment" },
    { id: 6, name: "Figma", imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", status: "Design" },
    { id: 7, name: "VS Code", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", status: "IDE" },
    { id: 8, name: "Postman", imageUrl: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", status: "API Testing" },
    { id: 9, name: "XAMPP", imageUrl: "https://images.icon-icons.com/1381/PNG/512/xampp_94513.png", status: "Local Server" },
  ];

  // ===== Motion variants =====
  const container: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.06 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 22 } },
  };
  const techCard: Variants = {
    rest: { y: 0, scale: 1, rotate: 0, skewX: 0 },
    hover: { y: -4, scale: 1.02, rotate: -0.4, skewX: -4, transition: { type: "spring", stiffness: 500, damping: 18 } },
  };

  return (
    <>
      {/* About Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5"
      >
        <article>
          <header>
            {/* Ribbon miring ala P5 */}
            <motion.div
              variants={item}
              initial={{ rotate: -8, y: -4 }}
              animate={{ rotate: -6, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex -rotate-6 bg-white text-black px-4 py-2 shadow-[0_8px_0_rgba(0,0,0,0.8)] mb-5"
            >
              <span className="text-sm md:text-base tracking-[0.2em] font-extrabold">
                ABOUT ME
              </span>
            </motion.div>

            <motion.div variants={item} className="text-3xl font-heading text-white mb-5 flex items-center gap-4">
              <span className="text-white">
                <HighlightLetters text="About Me" indices={[0, 1, 3]} className="font-menu" />
              </span>
              <span className="h-[2px] w-32 bg-primary md:w-96" />
            </motion.div>
          </header>

          <motion.section variants={container} className="text-sm md:text-lg text-justify flex flex-col gap-6 md:flex-row md:gap-10 md:items-center">
            {/* Avatar dengan frame komik */}
            <motion.div variants={item} className="flex justify-center">
              <motion.div
                whileHover={{ rotate: 1.5, y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative rounded-full p-1"
              >
                {/* stroke putih tebal (komik) */}
                <span className="absolute -inset-1 rounded-full border-[4px] border-white pointer-events-none" />
                  <PersonaAvatar
                    src="/project/avatar-2.png"
                    alt="Krisna"
                    size={400}
                  />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div variants={item} className="md:w-7/12 font-main-text text-3xl leading-7">
              <p className="mb-3 md:mb-7">
                &nbsp; &nbsp; &nbsp; Hi everyone! My name is Gede Krisnawa Sandhya Wandhana, or simply{" "}
                <span className="text-4xl">
                  <HighlightLetters text="krisna" indices={[0, 3, 5]} className="font-menu" />
                </span>
                . I’m a computer science graduate with strong interests in web development, IoT, and mobile development.
                For me, technology is not only about solving problems, but also about creating experiences that are meaningful,
                accessible, and engaging for people.
              </p>
              <p>
                &nbsp; &nbsp; &nbsp; I enjoy working in collaborative environments where ideas can grow, while continuously learning and
                refining my skills. My passion lies in turning concepts into real, impactful solutions through code, with the goal
                of combining logic and creativity in everything I build.
              </p>
            </motion.div>
          </motion.section>
        </article>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="py-5 md:py-10 text-left mx-3">
        <article>
          <header>
            <motion.div variants={item} className="text-3xl font-heading text-white mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-primary md:w-20" />
              <span>Skills</span>
            </motion.div>

            {/* Tabs + underline slider */}
            <motion.ul variants={item} className="relative inline-flex flex-wrap text-xl font-medium text-center text-gray-500 mb-6 font-heading">
              <li className="mr-2 relative">
                <button
                  onClick={() => setActiveTab(1)}
                  className={`px-4 py-2 rounded-lg transition hover:text-gray-200 ${activeTab === 1 ? "text-white" : ""}`}
                >
                  Tech Stack
                </button>
              </li>
              <li className="mr-2 relative">
                <button
                  onClick={() => setActiveTab(2)}
                  className={`px-4 py-2 rounded-lg transition hover:text-gray-200 ${activeTab === 2 ? "text-white" : ""}`}
                >
                  Tools
                </button>
              </li>

              {/* underline slider */}
              <motion.span
                layout
                className="absolute bottom-0 h-[3px] bg-primary rounded"
                initial={false}
                animate={{
                  width: activeTab === 1 ? 110 : 70, // kira2 lebar teks tombol (px)
                  x: activeTab === 1 ? 8 : 130,      // geser horizontal — sesuaikan bila font berubah
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </motion.ul>
          </header>

          {/* Tech Tab */}
          {activeTab === 1 && (
            <motion.section
              key="tech"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tech.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={techCard}
                    initial="rest"
                    whileHover="hover"
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-primary bg-black text-white tracking-tighter px-2 py-2 md:gap-3 lg:px-3">
                      <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16 lg:p-2">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                        />
                      </div>
                      <div className="flex items-center lg:text-lg relative">
                        <div className="transition-all duration-300 font-heading">
                          <span className="text-[30px]">
                            <HighlightLetters text={item.name} indices={[0, 2, 3]} className="font-menu" />
                          </span>
                        </div>
                        {/* status muncul saat hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute left-0 top-full mt-1 text-[11px] md:text-xs lg:text-sm font-semibold text-white"
                        >
                          <span className="px-2 py-0.5 bg-primary text-black -skew-x-6 inline-block">
                            <span className="skew-x-6">{item.status}</span>
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Tools Tab */}
          {activeTab === 2 && (
            <motion.section
              key="tools"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                {tools.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={techCard}
                    initial="rest"
                    whileHover="hover"
                    className="relative"
                    style={{ transformStyle: "preserve-3d" }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    <div className="item-tech flex cursor-pointer items-center gap-2 rounded border border-primary bg-black text-white px-2 py-2 md:gap-3 lg:px-3">
                      <div className="flex h-12 w-12 items-center justify-center lg:h-16 lg:w-16 lg:p-2">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                        />
                      </div>
                      <div className="flex items-center text-sm md:text-base lg:text-lg relative">
                        <div className="font-medium transition-all duration-300">
                          <span className="text-[30px]">
                            <HighlightLetters text={item.name} indices={[0, 2, 3]} className="font-menu" />
                          </span>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute left-0 top-full mt-1 text-[11px] md:text-xs lg:text-sm font-semibold text-white"
                        >
                          <span className="px-2 py-0.5 bg-primary text-black -skew-x-6 inline-block">
                            <span className="skew-x-6">{item.status}</span>
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </motion.div>
    </>
  );
}
