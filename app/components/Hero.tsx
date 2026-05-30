import Link from "next/link";

const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "15+", label: "Projects Delivered" },
  { num: "UAE+KSA", label: "Gov Clients" },
  { num: "COP28", label: "Global Scale" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 pb-16 px-16 max-w-[1100px] mx-auto relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,92,43,0.08) 0%, transparent 70%)" }} />

      {/* Available tag */}
      <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-accent border border-accent/30 px-4 py-1.5 rounded-full w-fit mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-accent dot-pulse" />
        Available for new opportunities
      </div>

      {/* Heading */}
      <h1 className="font-syne font-black leading-none tracking-tight mb-6"
        style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
        Alaa<br />
        Elnily<span className="text-accent">.</span>
      </h1>

      {/* Subheading */}
      <p className="text-muted text-lg max-w-lg mb-10 leading-relaxed">
        Frontend Developer with 5+ years crafting high-performance web experiences
        for governments, enterprises, and global events.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded font-syne font-semibold text-sm tracking-wide hover:bg-accent2 hover:-translate-y-px transition-all duration-200"
        >
          View My Work →
        </a>
        <a
          href="mailto:alaa.s.elnily@gmail.com"
          className="inline-flex items-center gap-2 border border-border text-light px-8 py-3.5 rounded font-syne font-semibold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-200"
        >
          Get In Touch
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-16 pt-10 border-t border-border flex-wrap">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-syne font-black text-4xl text-accent">{s.num}</div>
            <div className="text-xs text-muted uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
