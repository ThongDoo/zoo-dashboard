"use client"

import type { Animal } from "@/types/animal"
import StatusBar from "@/components/StatusBar"
import StatusBadge from "@/components/StatusBadge"

interface AnimalCardProps {
	animal: Animal
	onSelect: (animal: Animal) => void
}

export default function AnimalCard({ animal, onSelect }: AnimalCardProps) {
	return (
		<button
			type="button"
			onClick={() => onSelect(animal)}
			className="group w-full text-left bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md hover:border-slate-200 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
			aria-label={`View details for ${animal.name}`}
		>
			{/* Card header */}
			<div className="flex items-start justify-between mb-3">
				<span className="text-4xl" role="img" aria-hidden="true">
					{animal.emoji}
				</span>
				<StatusBadge status={animal.status} />
			</div>

			{/* Name and species */}
			<p className="font-bold text-slate-800 text-base leading-tight">
				{animal.name}
			</p>
			<p className="text-xs text-slate-400 italic mb-4">{animal.species}</p>

			{/* Mini status bars */}
			<div className="space-y-2.5">
				<StatusBar label="Hunger" value={animal.status.hunger} />
				<StatusBar label="Thirst" value={animal.status.thirst} />
				<StatusBar label="Hygiene" value={animal.status.hygiene} />
			</div>
		</button>
	)
}
