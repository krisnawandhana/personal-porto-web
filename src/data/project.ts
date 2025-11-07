// src/data/projects.ts
export type ProjectItem = {
  id: number;
  name: string;
  imageUrl: string;   // tanpa .png; gambar ada di /public/project/<imageUrl>.png
  status: string;     // deskripsi singkat
  tech: string;       // daftar singkat tech
  github?: string | null;
  demo?: string | null;
};

export const projects: ProjectItem[] = [
    {
      id: 1,
      name: "Personal Website",
      imageUrl: "portfolio_v2",
      status:
        "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
      tech: "React, Tailwind",
      github: "https://github.com/krisnawandhana/personal-porto-web.git",
      demo: "https://bagasrakha.netlify.app/",
    },
    {
      id: 2,
      name: " MindEase - Mental Health App",
      imageUrl: "mindease",
      status:
        "MindEase is a mental health app that combines music-based therapy, mood tracking, consultations, forums, chats, and notifications in one platform. Built with a scalable frontend, it provides seamless user experiences across all core features.",
      tech: "React, Tailwind",
      github: "https://github.com/Kelompok-6-Capstone-Alterra-2024/Frontend-React.git",
      demo: "https://frontend-react-fork2.vercel.app/",
    },
    {
      id: 3,
      name: "OrchidCare -  Smart Monitoring System for Orchid Growth",
      imageUrl: "orchidcare",
      status:
        "OrchidCare is a smart monitoring system designed to optimize the growth conditions of orchids. It utilizes IoT sensors to collect data on environmental factors and provides insights through a user-friendly interface.",
      tech: "React, Supabase, IoT",
      github: "https://github.com/krisnawandhana/Orchidcare-Final.git",
      demo: "https://drive.google.com/file/d/1jXbF0UtuBjbexaO09F20s3EyZepBahL4/view?usp=sharing",
    },
    {
      id: 4,
      name: "HuggingPet – AI-Powered Pet Health Detection",
      imageUrl: "huggingpet",
      status:
        "HuggingPet is an AI-powered application designed to assist pet owners in monitoring their pets' health. It utilizes machine learning algorithms to analyze pet behavior and provide insights into their well-being.",
      tech: "React, TensorFlow, Flask",
      github: "https://github.com/Niervash/Capstone.git",
      demo: "https://www.linkedin.com/posts/krisna-wandhana_bangkitelevatorpitch-lifeatbangkit-huggingpetrevolution-activity-7142539754440466433-hfC8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESjP5EBpU3hVaH80J4NUin9Ub5ISOag3kI",
    },
    {
      id: 5,
      name: "Melanoma Detection App – AI-Powered Skin Cancer Screening",
      imageUrl: "melanoma",
      status:
        "Melanoma Detection App is an AI-powered application designed for on-device skin cancer screening. It utilizes advanced image processing and machine learning algorithms to analyze skin lesions and provide real-time feedback.",
      tech: "React Native, TensorFlow Lite",
      github: "https://github.com/krisnawandhana/Melanoma-app-final.git",
      demo: "https://drive.google.com/file/d/1W7TPN4tTingYohVxPgfMRGoJTrq4Adwf/view?usp=sharing",
    },
    {
      id: 6,
      name: "Tokisaki Gallery – A Community-Driven Gallery & News Platform",
      imageUrl: "tokisaki",
      status:
        "Tokisaki Gallery is a community-driven platform that allows artists to showcase their work, connect with fans, and collaborate on projects. It features a user-friendly interface, social networking capabilities, and robust content management tools.",
      tech: "React, Tailwind, MockAPI",
      github: "https://github.com/krisnawandhana/Mini-Project-Alterra-Academy.git",
      demo: "https://mini-project-alterra-academy.vercel.app/",
    },
    {
      id: 7,
      name: "BookSpace - Simple Web App for Book Lovers",
      imageUrl: "bookspace",
      status:
        "BookSpace is a simple web app designed for book lovers to discover, share, and discuss their favorite books. It features a clean interface, user reviews, and personalized recommendations.",
      tech: "Next.js, Tailwind, Vercel",
      github: "null",
      demo: "null",
    },
    {
      id: 8,
      name: "TimeGap — Landing Page & Promo Website",
      imageUrl: "baligoodguide",
      status:
        "A promotional website built to showcase TimeGap, a mobile application designed for managing schedules and staying productive. The site highlights app features, benefits, and download options in a clean and responsive layout powered by React and Tailwind CSS.",
      tech: "React, Tailwind",
      github: "https://github.com/krisnawandhana/Baligoodguid.git",
      demo: "https://baligoodguid.vercel.app/",
    },
];