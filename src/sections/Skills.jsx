/** Habilidades técnicas y blandas como chips */
import Section from "../components/Section";
import Pill from "../components/Pill";
import { techSkills, softSkills } from "../data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Habilidades">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-3">Técnicas</h3>
          <div>{techSkills.map((t) => <Pill key={t}>{t}</Pill>)}</div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Blandas</h3>
          <div>{softSkills.map((t) => <Pill key={t}>{t}</Pill>)}</div>
        </div>
      </div>
    </Section>
  );
}
