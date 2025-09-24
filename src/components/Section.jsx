// src/components/Section.jsx

/**
 * Layout de sección con título y animación de entrada.
 * Uso: <Section id="about" title="Sobre mí">...</Section>
 */

import { motion } from "framer-motion";
// FIX: eliminé el import duplicado `motion as Motion`. Con uno alcanza.

export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
    >
      {title && (
        // FIX: había dos aperturas (<motion.h2 y <Motion.h2). Dejo UNA sola.
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
        >
          {title}
        </motion.h2>
        // FIX: removí el cierre duplicado </Motion.h2>.
      )}
      {children}
    </section>
  );
}