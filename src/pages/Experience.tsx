import ExperienceCardMinimal from "../components/experience/ExperienceCardMinimal";
import { experiences } from "../data/experienceData";

export default function Experience() {
  return (
    <section className="
        relative min-h-screen
        px-6 md:px-12 py-10 text-amber-50
      ">
      <header className="text-3xl font-heading text-white mb-10 flex items-center">
        Experience
        <div className="h-[1px] w-40 bg-primary ml-4"></div>
      </header>

      <div className="flex flex-col gap-10">
      {experiences.map((exp) => (
        <ExperienceCardMinimal
          key={exp.id}
          title={exp.title}
          period={exp.period}
        >
          <p className="text-sm md:text-xl mb-4">{exp.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {exp.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/20 text-primary text-base md:text-base px-2 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </ExperienceCardMinimal>
      ))}
      </div>
    </section>
  );
}

