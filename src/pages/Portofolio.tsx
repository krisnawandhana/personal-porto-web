import HighlightLetters from "../utility/HighLightLetters";
import FullImageCarousel, { type Slide } from "../components/FullImageCarousel";
import { projects } from "../data/project";

export default function Projects() {

  const slides: Slide[] = projects.map((p) => ({
    src: `/project/${p.imageUrl}.png`, 
    alt: p.name,
    caption: `${p.name} — ${p.tech}`,
    github: p.github ?? null,
    demo: p.demo ?? null,
  }));


  return (
    <div className="max-w-7x px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
      <article>
        <header>
          <div className="text-3xl font-bold text-white font-heading mb-10 flex items-center justify-center flex-col">
            <h4><HighlightLetters text="Past Projects Experience" indices={[0,2,4,8,9,17,19,21]} className="font-menu"/></h4>
            <h4 className="text-3xl font-normal bg-clip-text text-white font-main-text">
              Explore the projects I've worked on so far
            </h4>
          </div>
        </header>

        <section className="px-5 md:px-12">
          <div className="text-3xl font-bold text-white font-heading mb-6"/>
          <FullImageCarousel
            slides={slides}
            autoPlay={true}        
            interval={3500}
            aspect="aspect-[15/9]"
          />
        </section>
      </article>
    </div>
  );
};
