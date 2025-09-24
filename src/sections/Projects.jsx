// src/sections/Projects.jsx
import { useState } from "react";
import Section from "../components/Section";

const projects = [
  // Otros proyectos que ya tengas...
  {
    id: "speedtech",
    title: "speedTech — Servicios IT a domicilio",
    description:
      "Landing page institucional con React + Vite + Tailwind. Optimizada para SEO básico y performance.",
    url: "https://speedtech.com.ar",
  },
];

function SitePreview({ url }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="p-4 text-center">
        <p className="text-sm opacity-80 mb-3">
          La vista previa fue bloqueada por el sitio o el navegador.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/10"
        >
          Abrir sitio en nueva pestaña
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={url}
      title="Vista previa del proyecto"
      className="w-full h-[420px] rounded-xl border"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  const active = projects.find((p) => p.id === open);

  return (
    <Section id="projects" title="Proyectos">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
<<<<<<< HEAD
            className="rounded-xl border p-4 bg-white/70 dark:bg-white/5 backdrop-blur hover:shadow-md transition"
=======
            className="card hover:shadow-md transition"
>>>>>>> 01e8378 (cambios)
          >
            <h3 className="font-semibold leading-tight">{p.title}</h3>
            <p className="text-sm opacity-80 mt-1">{p.description}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => setOpen(p.id)}
<<<<<<< HEAD
                className="text-sm rounded-lg px-3 py-2 border hover:bg-gray-50 dark:hover:bg-white/10"
=======
                className="btn btn-secondary"
>>>>>>> 01e8378 (cambios)
              >
                Vista previa
              </button>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
<<<<<<< HEAD
                className="text-sm rounded-lg px-3 py-2 border hover:bg-gray-50 dark:hover:bg-white/10"
=======
                className="btn btn-secondary"
>>>>>>> 01e8378 (cambios)
              >
                Abrir sitio
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal simple */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 flex items-center justify-center"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-5xl w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b">
              <h4 className="font-semibold text-sm sm:text-base">{active.title}</h4>
              <button
                onClick={() => setOpen(null)}
                className="rounded-md px-3 py-1 text-sm border hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Cerrar
              </button>
            </div>
            <div className="p-3">
              <SitePreview url={active.url} />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
