import { experiences, education, certifications } from "@/app/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-16 max-w-[1100px] mx-auto fade-in">

      {/* Experience */}
      <p className="section-label">Experience</p>
      <h2 className="font-syne font-black tracking-tight mb-10 md:mb-14"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Where I&apos;ve worked.
      </h2>
      <div className="flex flex-col mb-16 md:mb-20">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className={`flex flex-col md:grid gap-2 md:gap-8 py-6 md:py-8 border-b border-border ${i === 0 ? "border-t" : ""}`}
            style={{ gridTemplateColumns: "200px 1fr" }}
          >
            <div className="text-xs md:text-sm text-muted mb-1 md:mb-0 md:pt-0.5">{exp.period}</div>
            <div>
              <div className="font-syne font-bold text-sm md:text-base text-light mb-1">{exp.role}</div>
              <div className="text-accent text-xs md:text-sm mb-3">{exp.company}</div>
              <p className="text-xs md:text-sm text-muted leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <p className="section-label">Education</p>
      <h2 className="font-syne font-black tracking-tight mb-10 md:mb-14"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Academic background.
      </h2>
      <div className="flex flex-col mb-16 md:mb-20">
        {education.map((edu, i) => (
          <div
            key={edu.institution}
            className={`flex flex-col md:grid gap-2 md:gap-8 py-6 md:py-8 border-b border-border ${i === 0 ? "border-t" : ""}`}
            style={{ gridTemplateColumns: "200px 1fr" }}
          >
            <div className="text-xs md:text-sm text-muted mb-1 md:mb-0">{edu.period}</div>
            <div>
              <div className="font-syne font-bold text-sm md:text-base text-light mb-1">{edu.degree}</div>
              <div className="text-accent text-xs md:text-sm mb-2">{edu.institution}</div>
              {edu.note && <p className="text-xs md:text-sm text-muted leading-relaxed">{edu.note}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <p className="section-label">Certifications</p>
      <h2 className="font-syne font-black tracking-tight mb-8 md:mb-10"
        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
        Courses &amp; certificates.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {certifications.map((cert) => (
          <div key={cert.title + cert.issuer} className="bg-surface border border-border rounded-lg px-4 md:px-5 py-4 md:py-5 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-syne font-bold text-sm text-light leading-snug">{cert.title}</div>
                <div className="text-accent text-xs mt-0.5">{cert.issuer}</div>
              </div>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 text-sm"
                  aria-label="View credential"
                >
                  ↗
                </a>
              )}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {cert.date && (
                <span className="text-[0.65rem] text-muted uppercase tracking-widest">{cert.date}</span>
              )}
              {cert.credentialId && (
                <span className="text-[0.65rem] text-muted font-mono">ID: {cert.credentialId}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Conference */}
      <div className="bg-surface border border-border rounded-xl px-6 md:px-8 py-5 md:py-6">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Conference Presentation</p>
        <p className="font-syne font-bold text-sm md:text-base text-light mb-2 leading-snug">
          &ldquo;Automatic POS tagging of Arabic words using the YAMCHA machine learning tool&rdquo;
        </p>
        <p className="text-xs md:text-sm text-muted">
          20th International Conference of Language Engineering (ESOLEC&apos;20) · Ain Shams University, Cairo · October 2022
        </p>
        <p className="text-xs text-accent mt-2">Published in IEEEXplore</p>
      </div>
    </section>
  );
}
