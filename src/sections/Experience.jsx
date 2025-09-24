// src/sections/Experience.jsx

/** Timeline de experiencia laboral */
import { motion } from "framer-motion";
/* FIX: elimino import duplicado `motion as Motion`. Con un solo import alcanza. */
import Section from "../components/Section";
import { experience } from "../data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experiencia">
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-100" />
        <ul className="space-y-8">
          {experience.map((item, idx) => (
            <li key={idx} className="relative pl-10 sm:pl-12">
              {/* Punto de la línea de tiempo: visible en claro y oscuro */}
              <span className="absolute left-3.5 sm:left-5 top-1.5 w-3 h-3 rounded-full
               bg-slate-900 dark:bg-slate-200" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <span className="text-sm text-slate-100 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                <p className="mt-1 text-slate-100 dark:text-slate-100">{item.company}</p>

                <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-900 dark:text-slate-300">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </motion.div>
            </li>

          ))}
        </ul>
      </div>
    </Section>
  );
}