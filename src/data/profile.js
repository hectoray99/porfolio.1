// Contenido del portfolio: fácil de editar sin tocar componentes.

/** Info principal del perfil */
export const profile = {
  name: "Héctor Alejandro Ayala",
  role: "Desarrollador Web Jr · Data Entry · Soporte Técnico",
  location: "Resistencia, Chaco, Argentina",
  phone: "+54 370 4906957",
  email: "ayalahec99@gmail.com",
  linkedin: "https://www.linkedin.com/in/hecay99",
};

/** Habilidades técnicas (mostradas como chips) */
export const techSkills = [
  "JavaScript","React","HTML","CSS","PHP","MySQL","Git","Excel Avanzado","Node.js","Tailwind","Figma","Python","Vite"
];

/** Habilidades blandas */
export const softSkills = [
  "Comunicación","Aprendizaje rápido","Organización","Proactividad",
  "Resolución de problemas","Trabajo en equipo","Adaptabilidad","Atención al cliente"
];

/** Experiencia laboral (timeline) */
export const experience = [
  {
    company: "C.E.R.fsa (Centro de Enfermedades Respiratorias Formosa)",
    role: "Secretario Administrativo",
    period: "Ago 2020 – Dic 2021",
    bullets: [
      "Atención al público y soporte presencial/telefónico.",
      "Gestión de documentación y organización de archivos.",
      "Implementé un sistema digital de turnos con Excel y Google Drive.",
    ],
  },
  {
    company: "Clínica Privada Sanidar Formosa",
    role: "Técnico / Administrativo (freelance)",
    period: "2021 – Actualidad",
    bullets: [
      "Facturación, soporte técnico e instalación de equipos.",
      "Integré y adapté el sistema de turnos digital.",
      "Capacitación a médicos/enfermeros en Excel y Drive.",
    ],
  },
];

/** Educación */
export const education = [
  { title: "Tecnicatura Universitaria en Programación (en curso)", org: "UTN Resistencia" },
  { title: "Diplomatura en Programación Web Full-Stack (210 h)", org: "UTN Resistencia · 2021" },
  { title: "Diseño Gráfico Digital (60 h)", org: "2022" },
];
