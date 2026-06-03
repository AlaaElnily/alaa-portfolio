import { projects } from "@/app/data";

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-16 max-w-[1100px] mx-auto fade-in">
      <p className="section-label">Selected work</p>
      <h2 className="font-syne font-black tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Projects &amp; Clients.
      </h2>
      <p className="text-muted mb-10 md:mb-14 max-w-xl">
        A selection of websites and applications I&apos;ve designed and developed — from national
        government platforms to global conferences.
      </p>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`flex items-start gap-4 py-5 border-b border-border transition-all duration-200 hover:bg-surface hover:-mx-4 hover:px-4
              ${i === 0 ? "border-t" : ""}`}
          >
            {/* Number */}
            <div className="font-syne text-[0.7rem] text-muted pt-1 w-7 flex-shrink-0">{project.num}</div>

            {/* Name + role + tags */}
            <div className="flex-1 min-w-0">
              <div className="font-syne font-bold text-sm md:text-base text-light leading-snug">{project.name}</div>
              <div className="text-xs md:text-sm text-muted mt-0.5 mb-2">{project.role}</div>
              <div className="flex gap-1.5 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[0.65rem] px-2 py-0.5 rounded-sm bg-surface2 border border-border text-muted whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="flex-shrink-0 pt-1">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 text-sm"
                  aria-label={`Visit ${project.name}`}
                >
                  {project.isVideo ? "▶" : "↗"}
                </a>
              ) : (
                <div className="w-8 h-8 md:w-9 md:h-9 rounded border border-border text-muted/30 flex items-center justify-center text-sm cursor-not-allowed">
                  ↗
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
