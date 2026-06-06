import { LogoIcon } from "@app/components/shared/LogoIcon";
import "@app/components/shared/NgalihyaBrand.css";

interface NgalihyaBrandProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function NgalihyaBrand({
  className = "",
  iconClassName = "",
  textClassName = "",
}: NgalihyaBrandProps) {
  const classes = ["ngalihya-brand", className].filter(Boolean).join(" ");
  const iconClasses = ["ngalihya-brand__icon", iconClassName]
    .filter(Boolean)
    .join(" ");
  const textClasses = ["ngalihya-brand__text", textClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} aria-label="Ngalihya PDF">
      <LogoIcon className={iconClasses} alt="" />
      <span className={textClasses}>
        Ngalihya <strong>PDF</strong>
      </span>
    </span>
  );
}
