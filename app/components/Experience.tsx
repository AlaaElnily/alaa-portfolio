import { experiences, education, certifications } from "@/app/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-16 max-w-[1100px] mx-auto fade-in">
      <p className="section-label">Experience</p>
      <h2 className="font-syne font-black tracking-tight mb-14"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Where I&apos;ve worked.
      </h2>

      <div className="flex flex-col mb-20">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className={`grid gap-8 py-8 border-b border-border ${i === 0 ? "border-t" : ""}`}
            style={{ gridTemplateColumns: "200px 1fr" }}
          >
            <div className="text-sm text-muted pt-0.5 leading-relaxed">{exp.period}</div>
            <div>
              <div className="font-syne font-bold text-base text-light mb-1">{exp.role}</div>
              <div className="text-accent text-sm mb-4">{exp.company}</div>
              <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <p className="section-label">Education</p>
      <h2 className="font-syne font-black tracking-tight mb-14"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Academic background.
      </h2>
      <div className="flex flex-col mb-20">
        {education.map((edu, i) => (
          <div
            key={edu.institution}
            className={`grid gap-8 py-8 border-b border-border ${i === 0 ? "border-t" : ""}`}
            style={{ gridTemplateColumns: "200px 1fr" }}
          >
            <div className="text-sm text-muted pt-0.5">{edu.period}</div>
            <div>
              <div className="font-syne font-bold text-base text-light mb-1">{edu.degree}</div>
              <div className="text-accent text-sm mb-3">{edu.institution}</div>
              {edu.note && <p className="text-sm text-muted leading-relaxed">{edu.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <p className="section-label">Certifications</p>
      <h2 className="font-syne font-black tracking-tight mb-10"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Courses &amp; certificates.
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {certifications.map((cert) => (
          <div key={cert} className="bg-surface border border-border rounded-lg px-5 py-4 flex items-center gap-3">
            <span className="text-accent text-xs">✦</span>
            <span className="text-sm text-body">{cert}</span>
          </div>
        ))}
      </div>

      {/* Conference */}
      <div className="mt-12 bg-surface border border-border rounded-xl px-8 py-6">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Conference Presentation</p>
        <p className="font-syne font-bold text-light mb-1">
          &ldquo;Automatic POS tagging of Arabic words using the YAMCHA machine learning tool&rdquo;
        </p>
        <p className="text-sm text-muted">
          20th International Conference of Language Engineering (ESOLEC&apos;20) · Ain Shams University, Cairo · October 2022
        </p>
        <p className="text-xs text-accent mt-2">Published in IEEEXplore</p>
      </div>
    </section>
  );
}
