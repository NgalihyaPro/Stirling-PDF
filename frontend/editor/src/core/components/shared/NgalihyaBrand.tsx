import { Wordmark } from "@app/components/shared/Wordmark";
import "@app/components/shared/NgalihyaBrand.css";

interface NgalihyaBrandProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export function NgalihyaBrand({
  className = "",
}: NgalihyaBrandProps) {
  const classes = ["ngalihya-brand", className].filter(Boolean).join(" ");

  return <Wordmark alt="Ngalihya PDF" className={classes} />;
}
