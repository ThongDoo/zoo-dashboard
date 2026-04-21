import { getStatusLevel, STATUS_STYLES } from "@/utils/status"

interface StatusBarProps {
	label: string
	value: number
}

export default function StatusBar({ label, value }: StatusBarProps) {
	const level = getStatusLevel(value)
	const styles = STATUS_STYLES[level]

	return (
		<div>
			<div className="flex justify-between items-center mb-1">
				<span className="text-xs font-medium text-slate-500">{label}</span>
				<span className="text-xs font-semibold text-slate-700">{value}%</span>
			</div>
			<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
				<div
					className={`h-full rounded-full transition-all duration-500 ${styles.bar}`}
					style={{ width: `${value}%` }}
					role="progressbar"
					aria-valuenow={value}
					aria-valuemin={0}
					aria-valuemax={100}
					aria-label={`${label}: ${value}%`}
				/>
			</div>
		</div>
	)
}
