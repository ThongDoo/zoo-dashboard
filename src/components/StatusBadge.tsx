// Presents incoming status level using CSS.
import { getOverallStatus, STATUS_STYLES } from "@/utils/status"
import type { AnimalStatus } from "@/types/animal"

interface StatusBadgeProps {
	status: AnimalStatus
}

export default function StatusBadge({ status }: StatusBadgeProps) {
	const level = getOverallStatus(status.hunger, status.thirst, status.hygiene)
	const styles = STATUS_STYLES[level]

	return (
		<span
			className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles.badge}`}
		>
			{styles.label}
		</span>
	)
}
