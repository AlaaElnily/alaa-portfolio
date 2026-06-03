import { personalVideos } from "@/app/data";

export default function PersonalWork() {
  return (
    <section id="personal" className="py-20 md:py-28 px-6 md:px-16 max-w-[1100px] mx-auto fade-in">
      <p className="section-label">Self-initiated</p>
      <h2
        className="font-syne font-black tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
      >
        Personal work.
      </h2>
      <p className="text-muted mb-10 md:mb-14 max-w-xl">
        Projects I built on my own time — to learn, experiment, and push my skills further.
        Every one of these was designed and/or developed entirely by me.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {personalVideos.map((video) => {
          const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
          const url = video.isShort
            ? `https://www.youtube.com/shorts/${video.id}`
            : `https://www.youtube.com/watch?v=${video.id}`;

          return (
            <a
              key={video.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border border-border hover:border-accent transition-all duration-300 block"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-surface2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumb}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-200 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5 md:w-6 md:h-6 ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Role badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest text-accent border border-accent/40 bg-bg/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {video.role}
                  </span>
                </div>
              </div>

              {/* Card info */}
              <div className="p-4 md:p-5 bg-surface">
                <div className="font-syne font-bold text-light text-sm md:text-base mb-1">{video.title}</div>
                <p className="text-muted text-xs md:text-sm leading-relaxed">{video.description}</p>
                <div className="flex items-center gap-1.5 mt-3 md:mt-4 text-accent text-xs font-syne font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Watch on YouTube <span>→</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
