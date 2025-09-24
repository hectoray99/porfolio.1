/**
 * Button component con variantes de estilo.
 * Props: variant ("primary" | "secondary"), as ("a" | "button"), href, onClick, className, children
 */
export default function Button({ variant = "primary", as = "a", href, className = "", ...props }) {
  const base = "btn focus-ring"; // utilidades globales
  const styles = {
    primary: `${base} btn-primary`,
    secondary: `${base} btn-secondary`,
  };
  const Comp = as === "button" ? "button" : "a";
  const finalClass = `${styles[variant] ?? styles.primary} ${className}`.trim();
  return <Comp href={href} className={finalClass} {...props} />;
}
