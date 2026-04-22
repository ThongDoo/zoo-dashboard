// Client Component: holds pagination and selected-animal state with
// useState/useMemo/useCallback and drives React Query hooks (useAnimals,
// useQueryClient), all of which require a client runtime.
"use client"

import { useState, useMemo, useCallback } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useAnimals } from "@/hooks/useAnimals"
import type { Animal, AnimalsResponse } from "@/types/animal"
import AnimalCard from "@/components/AnimalCard"
import AnimalModal from "@/components/AnimalModal"
import LoadingGrid from "@/components/LoadingGrid"
import ErrorMessage from "@/components/ErrorMessage"
import LastUpdated from "@/components/LastUpdated"

const ANIMALS_PER_PAGE = 8

export default function AnimalGrid() {
	// Owns all data-fetching state (via React Query)
	// React Query hooks call useState/useEffect internally
	const { data, isLoading, isError, error, refetch, dataUpdatedAt } =
		useAnimals()
	const queryClient = useQueryClient()
	const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null)
	const [page, setPage] = useState(1)

	const totalPages = data
		? Math.max(1, Math.ceil(data.animals.length / ANIMALS_PER_PAGE))
		: 1

	const pageAnimals = useMemo(() => {
		if (!data) return []
		const start = (page - 1) * ANIMALS_PER_PAGE
		return data.animals.slice(start, start + ANIMALS_PER_PAGE)
	}, [data, page])

	// Mutate the cached animal status so UI updates optimistically.
	// The next auto-refetch will re-randomize values, which matches the
	// existing API behavior.
	const updateAnimalStatus = useCallback(
		(id: string, patch: Partial<Animal["status"]>) => {
			queryClient.setQueryData<AnimalsResponse>(["animals"], (prev) => {
				if (!prev) return prev
				return {
					...prev,
					animals: prev.animals.map((a) =>
						a.id === id ? { ...a, status: { ...a.status, ...patch } } : a,
					),
				}
			})
			setSelectedAnimal((prev) =>
				prev && prev.id === id
					? { ...prev, status: { ...prev.status, ...patch } }
					: prev,
			)
		},
		[queryClient],
	)

	const handleFeedFood = useCallback(
		(animal: Animal) => updateAnimalStatus(animal.id, { hunger: 100 }),
		[updateAnimalStatus],
	)
	const handleFeedWater = useCallback(
		(animal: Animal) => updateAnimalStatus(animal.id, { thirst: 100 }),
		[updateAnimalStatus],
	)
	const handleClean = useCallback(
		(animal: Animal) => updateAnimalStatus(animal.id, { hygiene: 100 }),
		[updateAnimalStatus],
	)

	return (
		<section aria-label="Animal welfare dashboard">
			{/* Toolbar */}
			<div className="flex items-center justify-between mb-6">
				<h2 className="text-lg font-semibold text-slate-700">
					{data ? `${data.animals.length} animals` : "Animals"}
				</h2>
				<div className="flex items-center gap-4">
					{dataUpdatedAt > 0 && <LastUpdated timestamp={dataUpdatedAt} />}
					<button
						onClick={() => refetch()}
						disabled={isLoading}
						aria-label="Refresh animal data"
						className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition-colors shadow-sm"
					>
						<svg
							className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
							/>
						</svg>
						Refresh
					</button>
				</div>
			</div>

			{/* Content states */}
			{isLoading && <LoadingGrid />}

			{isError && (
				<ErrorMessage
					message={error?.message ?? "An unexpected error occurred."}
					onRetry={() => refetch()}
				/>
			)}

			{data && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{pageAnimals.map((animal) => (
						<AnimalCard
							key={animal.id}
							animal={animal}
							onSelect={setSelectedAnimal}
						/>
					))}
				</div>
			)}

			{/* Pagination */}
			{data && totalPages > 1 && (
				<nav
					aria-label="Pagination"
					className="mt-8 flex items-center justify-center gap-2"
				>
					<button
						onClick={() => setPage((p) => Math.max(1, p - 1))}
						disabled={page === 1}
						className="px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
					>
						Previous
					</button>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
						<button
							key={n}
							onClick={() => setPage(n)}
							aria-current={n === page ? "page" : undefined}
							className={`min-w-[2.25rem] px-3 py-1.5 text-sm rounded-lg border transition-colors shadow-sm ${
								n === page
									? "bg-slate-800 text-white border-slate-800"
									: "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
							}`}
						>
							{n}
						</button>
					))}
					<button
						onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
						disabled={page === totalPages}
						className="px-3 py-1.5 text-sm text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
					>
						Next
					</button>
				</nav>
			)}

			{/* Auto-refresh notice */}
			{data && (
				<p className="mt-6 text-center text-xs text-slate-400">
					Data refreshes automatically every minute
				</p>
			)}

			{/* Detail modal */}
			{selectedAnimal && (
				<AnimalModal
					animal={selectedAnimal}
					onClose={() => setSelectedAnimal(null)}
					onFeedFood={handleFeedFood}
					onFeedWater={handleFeedWater}
					onClean={handleClean}
				/>
			)}
		</section>
	)
}
