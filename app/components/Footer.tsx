export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-16 py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 max-w-[1100px] mx-auto text-center sm:text-left">
      <p className="text-xs text-muted">© {new Date().getFullYear()} Alaa Elnily. All rights reserved.</p>
      <a href="mailto:alaa.s.elnily@gmail.com" className="text-xs text-accent hover:underline">
        alaa.s.elnily@gmail.com
      </a>
    </footer>
  );
}
