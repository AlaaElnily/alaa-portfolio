import { skills } from "@/app/data";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 max-w-[1100px] mx-auto fade-in">
      <p className="section-label">About me</p>
      <h2 className="font-syne font-black tracking-tight mb-4"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Passionate about building things that matter.
      </h2>
      <p className="text-muted mb-10 md:mb-14 max-w-xl">I love what I do — and I think that shows in the work.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left: text + skills */}
        <div>
          <p className="text-body leading-loose mb-5">
            With 4+ years of professional experience at Omnia FZ LLC (a Globant division), I&apos;ve
            built high-impact websites for UAE and KSA government ministries, global enterprises,
            and international events like COP28. I specialize in React and Next.js, crafting fully
            responsive, performant, and multilingual interfaces that work at scale.
          </p>
          <p className="text-body leading-loose mb-5">
            I hold a Diploma in Professional Web Development from ITI and a BA from Alexandria
            University where I graduated ranked third and received a Distinguished Student Award.
            I also presented research at the 20th International Conference of Language Engineering
            (ESOLEC&apos;20), published in IEEEXplore.
          </p>
          <p className="text-body leading-loose mb-8">
            Based in Alexandria, Egypt — open to remote opportunities and relocating.
          </p>

          {/* Skills */}
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Technical Skills</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className={`text-xs tracking-wide border px-3.5 py-1.5 rounded transition-all duration-200 cursor-default
                  ${skill.hot
                    ? "border-accent/40 text-accent2 bg-accent/10 hover:bg-accent/20"
                    : "border-border text-muted hover:border-accent hover:text-accent"
                  }`}
              >
                {skill.label}
              </span>
            ))}
          </div>

          {/* Soft skills */}
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Soft Skills</p>
          <div className="flex flex-wrap gap-2">
            {["Public Speaking", "Problem Solving", "Time Management", "Team Leadership",
              "Communication", "Fast Learner", "Flexible with New Tech"].map((s) => (
              <span key={s} className="text-xs border border-border text-muted px-3.5 py-1.5 rounded">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right: info cards */}
        <div className="flex flex-col gap-3 md:gap-4">
          {[
            { label: "Email", value: "alaa.s.elnily@gmail.com", href: "mailto:alaa.s.elnily@gmail.com", isAccent: false },
            { label: "Phone", value: "+20 (0) 106 451 4666", href: "tel:+201064514666", isAccent: false },
            { label: "Location", value: "Alexandria, Egypt — Open to Remote & Relocation", href: null, isAccent: false },
            { label: "Specialization", value: "React / Next.js Frontend", href: null, isAccent: false },
            { label: "Languages", value: "Arabic (Native) · English (Fluent) · French (Basic) · Dutch (Basic)", href: null, isAccent: false },
            { label: "Status", value: "Open to new roles ✦", href: null, isAccent: true },
          ].map((card) => (
            <div key={card.label} className="bg-surface border border-border rounded-lg px-5 py-4">
              <div className="text-xs uppercase tracking-widest text-muted mb-1">{card.label}</div>
              {card.href ? (
                <a href={card.href} className="font-syne font-semibold text-accent hover:underline text-sm break-all">
                  {card.value}
                </a>
              ) : (
                <div className={`font-syne font-semibold text-sm ${card.isAccent ? "text-accent" : "text-light"}`}>
                  {card.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
