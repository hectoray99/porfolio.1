// Hero.jsx — Hero responsivo con degradé, CTAs y tarjeta visual
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Texto */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
              Héctor Alejandro
            </span>
            <br />
            Ayala
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Desarrollador Web Jr · Data Entry · Soporte Técnico
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl"
          >
            Soy versátil con background administrativo y técnico. Me enfoco en
            desarrollo web y optimización de procesos. Me gusta crear interfaces
            limpias, rápidas y fáciles de usar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://www.linkedin.com/in/tu-usuario" // TODO: poné tu link
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Ir a mi perfil de LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href="mailto:tu-email@ejemplo.com" // TODO: tu email
              className="btn-secondary"
              aria-label="Enviarme un email"
            >
              Escribime
            </a>

            <a
              href="tel:+5490000000000" // TODO: tu número
              className="btn-secondary"
              aria-label="Llamarme por teléfono"
            >
              Llamar
            </a>
          </motion.div>
        </div>

        {/* Tarjeta visual / “foto” */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          
        >
          <div className="mx-auto my-auto">
            {/* Ícono simple para ahora (podés reemplazar por tu foto) */}
            <img src="src/assets/hector.png" alt="hector ayala" />

          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Ícono minimalista (inline SVG) para evitar dependencias extra) */
function LaptopIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="10" rx="1.5" />
      <path d="M2 18h20" />
      <path d="M8 21h8" />
    </svg>
  );
}
