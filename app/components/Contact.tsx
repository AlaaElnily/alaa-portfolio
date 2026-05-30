export default function Contact() {
  return (
    <section id="contact" className="py-28 pb-16 px-16 max-w-[1100px] mx-auto fade-in">
      <div className="bg-surface border border-border rounded-xl p-16 text-center relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[400px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,92,43,0.07) 0%, transparent 60%)" }}
        />
        <h2 className="font-syne font-black tracking-tight mb-4 relative z-10"
          style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)" }}>
          Let&apos;s build something great.
        </h2>
        <p className="text-muted mb-8 relative z-10">
          I&apos;m currently open to new frontend roles — remote or on-site. Let&apos;s talk.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative z-10">
          <a
            href="mailto:alaa.s.elnily@gmail.com"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded font-syne font-semibold text-sm tracking-wide hover:bg-accent2 hover:-translate-y-px transition-all duration-200"
          >
            alaa.s.elnily@gmail.com →
          </a>
          <a
            href="https://linkedin.com/in/alaa-elnily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-light px-8 py-3.5 rounded font-syne font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
