/** Chip simple para skills/tecnologías */
export default function Pill({ children, className = "" }) {
  return <span className={`badge mr-2 mb-2 ${className}`.trim()}>{children}</span>;
}
