export type StatusLevel = "good" | "warning" | "critical";

// All status values are "wellness" scores: 100 = best condition, 0 = worst.
// e.g. hunger: 100 means fully fed; thirst: 100 means fully hydrated.
export function getStatusLevel(value: number): StatusLevel {
  if (value >= 67) return "good";
  if (value >= 34) return "warning";
  return "critical";
}

export function getOverallStatus(
  hunger: number,
  thirst: number,
  hygiene: number
): StatusLevel {
  return getStatusLevel(Math.min(hunger, thirst, hygiene));
}

export const STATUS_STYLES: Record<
  StatusLevel,
  { bar: string; badge: string; label: string }
> = {
  good: {
    bar: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    label: "Good",
  },
  warning: {
    bar: "bg-amber-400",
    badge: "bg-amber-100 text-amber-700",
    label: "Needs Attention",
  },
  critical: {
    bar: "bg-red-500",
    badge: "bg-red-100 text-red-700",
    label: "Critical",
  },
};

export function formatRelativeTime(isoString: string): string {
  const diffMs = Date.now() - new Date(isoString).getTime();
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  if (hours > 0) return `${hours}h ${minutes % 60}m ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return "just now";
}
