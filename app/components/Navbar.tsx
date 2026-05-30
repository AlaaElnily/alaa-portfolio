"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-bg/85 backdrop-blur-md border-b border-border">
      <Link href="/" className="font-syne font-black text-lg tracking-tight text-light">
        AE<span className="text-accent">.</span>
      </Link>
      <ul className="flex gap-8 list-none">
        {["About", "Work", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted text-sm uppercase tracking-widest hover:text-accent transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
