import { Activity } from "lucide-react";
import { Link } from "react-router-dom";

export function Brand({ to = "/" }: { to?: string }) {
  return (
    <Link to={to} className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-soft">
        <Activity className="h-4 w-4" />
      </span>
      <span className="font-semibold tracking-tight text-foreground">
        HealthMate <span className="text-primary">AI</span>
      </span>
    </Link>
  );
}