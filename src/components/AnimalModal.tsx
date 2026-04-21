"use client"

import { useEffect, useCallback } from "react"
import type { Animal } from "@/types/animal"
import StatusBar from "@/components/StatusBar"
import { formatRelativeTime } from "@/utils/status"

interface AnimalModalProps {
	animal: Animal
	onClose: () => void
	onFeedFood: (animal: Animal) => void
	onFeedWater: (animal: Animal) => void
	onClean: (animal: Animal) => void
}

export default function AnimalModal({
	animal,
	onClose,
	onFeedFood,
	onFeedWater,
	onClean,
}: AnimalModalProps) {
	// Attaches keyboard/click event listeners for dismissal. These require the
	// client boundary.
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
		},
		[onClose],
	)

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown)
		document.body.style.overflow = "hidden"
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
			document.body.style.overflow = ""
		}
	}, [handleKeyDown])

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4"
			aria-modal="true"
			role="dialog"
			aria-labelledby="modal-title"
		>
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={onClose}
				aria-hidden="true"
			/>

			{/* Panel */}
			<div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
				{/* Header */}
				<div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-start justify-between rounded-t-2xl">
					<div className="flex items-center gap-4">
						<span className="text-5xl" role="img" aria-label={animal.species}>
							{animal.emoji}
						</span>
						<div>
							<h2 id="modal-title" className="text-xl font-bold text-slate-800">
								{animal.name}
							</h2>
							<p className="text-sm text-slate-500 italic">{animal.species}</p>
						</div>
					</div>
					<button
						onClick={onClose}
						aria-label="Close modal"
						className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Body */}
				<div className="px-6 py-5 space-y-6">
					{/* Info grid */}
					<div className="grid grid-cols-2 gap-4">
						{[
							{ label: "Age", value: `${animal.age} years` },
							{
								label: "Last fed",
								value: formatRelativeTime(animal.lastFed),
							},
						].map(({ label, value }) => (
							<div key={label} className="bg-slate-50 rounded-lg p-3">
								<p className="text-xs font-medium text-slate-400 mb-0.5">
									{label}
								</p>
								<p className="text-sm font-semibold text-slate-700">{value}</p>
							</div>
						))}
					</div>

					{/* Status bars */}
					<div>
						<h3 className="text-sm font-semibold text-slate-700 mb-3">
							Current Needs
						</h3>
						<div className="space-y-3">
							<StatusBar label="Hunger" value={animal.status.hunger} />
							<StatusBar label="Thirst" value={animal.status.thirst} />
							<StatusBar label="Hygiene" value={animal.status.hygiene} />
						</div>
					</div>

					{/* Care actions */}
					<div>
						<h3 className="text-sm font-semibold text-slate-700 mb-3">
							Care Actions
						</h3>
						<div className="grid grid-cols-3 gap-2">
							<button
								type="button"
								onClick={() => onFeedFood(animal)}
								disabled={animal.status.hunger >= 100}
								className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								<span className="text-xl" aria-hidden="true">🍖</span>
								Feed Food
							</button>
							<button
								type="button"
								onClick={() => onFeedWater(animal)}
								disabled={animal.status.thirst >= 100}
								className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-100 rounded-lg hover:bg-sky-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								<span className="text-xl" aria-hidden="true">💧</span>
								Feed Water
							</button>
							<button
								type="button"
								onClick={() => onClean(animal)}
								disabled={animal.status.hygiene >= 100}
								className="flex flex-col items-center justify-center gap-1 px-3 py-2.5 text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-100 rounded-lg hover:bg-violet-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								<span className="text-xl" aria-hidden="true">🧼</span>
								Clean
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
