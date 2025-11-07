"use client";

type Item = {
  id: string | number;
  name: string;
  status: string;
  tech: string;
  imageUrl: string; // tanpa .png (sesuai kode kamu)
  github?: string | null;
  demo?: string | null;
};

export default function ProjectCard({ item }: { item: Item }) {
  return (
    <div className="item-card flex flex-col items-center gap-2 rounded-xl bg-[#1e1e1f] hover:bg-linear-to-t hover:from-dark hover:to-[#1e1e1f] border border-secondary text-white md:gap-3 px-5 py-5 lg:px-5 transition-all">
      <div className="flex w-full items-center justify-center">
        <img
          src={`/project/${item.imageUrl}.png`}
          alt={item.name}
          className="drop-shadow-xl rounded-xl"
        />
      </div>

      <div className="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
        <div className="font-medium">{item.name}</div>
        <div className="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
          {item.status}
        </div>
        <div className="w-full mt-4 text-sm text-left text-primary">
          {item.tech}
        </div>

        {/* Links */}
        <div className="w-full flex justify-end">
          <div className="flex cursor-pointer items-end gap-2">
            {item.github && item.github !== "null" && (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                title="View github repository"
                className="transition-all hover:text-amber-200"
              >
                {/* GitHub icon */}
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
            {item.demo && item.demo !== "null" && (
              <a
                href={item.demo}
                target="_blank"
                rel="noreferrer"
                title="View finished project"
                className="transition-all hover:text-amber-200"
              >
                {/* External icon */}
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
