/** Tarjetas de contacto (email/teléfono/linkedin) */
import Section from "../components/Section";
import { profile } from "../data/profile";

function Card({ title, value, href }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="card hover:shadow-md transition-shadow"
    >
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{title}</p>
      <p className="mt-1 font-medium break-words">{value}</p>
    </a>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contacto">
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <Card title="Teléfono" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
        <Card title="LinkedIn" value={profile.linkedin.replace("https://", "")} href={profile.linkedin} />
      </div>
    </Section>
  );
}
