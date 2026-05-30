export default function Footer() {
  return (
    <footer className="border-t border-border px-16 py-8 flex justify-between items-center max-w-[1100px] mx-auto">
      <p className="text-xs text-muted">© {new Date().getFullYear()} Alaa Elnily. All rights reserved.</p>
      <a href="mailto:alaa.s.elnily@gmail.com" className="text-xs text-accent hover:underline">
        alaa.s.elnily@gmail.com
      </a>
    </footer>
  );
}
