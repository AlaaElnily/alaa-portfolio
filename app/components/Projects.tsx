import { projects } from "@/app/data";

export default function Projects() {
  return (
    <section id="work" className="py-28 px-16 max-w-[1100px] mx-auto fade-in">
      <p className="section-label">Selected work</p>
      <h2 className="font-syne font-black tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Projects &amp; Clients.
      </h2>
      <p className="text-muted mb-14 max-w-xl">
        A selection of websites and applications I&apos;ve designed and developed — from national
        government platforms to global conferences.
      </p>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`grid items-center gap-8 py-5 border-b border-border transition-all duration-200 hover:bg-surface hover:-mx-4 hover:px-4
              ${i === 0 ? "border-t" : ""}`}
            style={{ gridTemplateColumns: "3fr 1.5fr auto" }}
          >
            {/* Name + role */}
            <div>
              <div className="font-syne text-[0.7rem] text-muted mb-1">{project.num}</div>
              <div className="font-syne font-bold text-base text-light">{project.name}</div>
              <div className="text-sm text-muted">{project.role}</div>
            </div>

            {/* Tags */}
            <div className="flex gap-1.5 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[0.7rem] px-2.5 py-1 rounded-sm bg-surface2 border border-border text-muted whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 text-sm flex-shrink-0"
                aria-label={`Visit ${project.name}`}
              >
                {project.isVideo ? "▶" : "↗"}
              </a>
            ) : (
              <div className="w-9 h-9 rounded border border-border text-muted/30 flex items-center justify-center text-sm flex-shrink-0 cursor-not-allowed">
                ↗
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
