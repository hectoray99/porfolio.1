import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "skills", label: "Habilidades" },
  { id: "certificates", label: "Certificados" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Estado inicial del tema
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", useDark);
    setDark(useDark);
  }, []);

  // Sombra al scrollear
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll al abrir menú móvil
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Detectar sección visible para resaltar link
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const toggleDark = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const NavLink = ({ id, label, onClick }) => {
    const isActive = active === id;
    return (
      <a
        href={`#${id}`}
        onClick={onClick}
        className={[
          "relative px-2 py-0.5 text-[0.95rem] transition hover:text-indigo-600",
          isActive ? "text-indigo-600" : "text-slate-700 dark:text-slate-200",
        ].join(" ")}
      >
        {label}
        <span
          className={[
            "absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all",
            isActive ? "w-full bg-indigo-600" : "w-0 bg-transparent",
          ].join(" ")}
        />
      </a>
    );
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60",
        "border-slate-200 dark:border-slate-800 transition-shadow",
        scrolled ? "shadow-sm" : "",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#app" className="font-semibold tracking-tight text-slate-800 dark:text-slate-100">
          Héctor Ayala
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LINKS.map((l) => (
            <NavLink key={l.id} id={l.id} label={l.label} />
          ))}
          <button
            onClick={toggleDark}
            aria-label="Alternar tema"
            className="btn-secondary"
            title={dark ? "Modo oscuro" : "Modo claro"}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Alternar tema"
            className="rounded-xl border px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-slate-700"
          >
            {dark ? "🌙" : "☀️"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-slate-700"
            aria-label="Abrir menú"
            aria-controls="mobile-menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Drawer móvil */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] md:hidden"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed top-16 inset-x-0 z-50 md:hidden border-t border-slate-200 dark:border-slate-800
                 bg-white/95 dark:bg-slate-950/95 backdrop-blur shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-800 dark:text-slate-100 hover:text-indigo-600"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
