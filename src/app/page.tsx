import AnimalGrid from "@/components/AnimalGrid"

export default function HomePage() {
	return (
		<main className="min-h-screen bg-slate-100">
			<header className="bg-white border-b border-slate-200 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center gap-3">
						<span className="text-4xl" role="img" aria-label="Zoo">
							🦁
						</span>
						<div>
							<h1 className="text-2xl font-bold text-slate-800">
								Zoo Dashboard
							</h1>
							<p className="text-sm text-slate-500">Live animal monitoring</p>
						</div>
					</div>
				</div>
			</header>
			{/* AnimalGrid is push the client boundary as deep as possible
          so the outer frame benefits from server rendering. */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<AnimalGrid />
			</div>
		</main>
	)
}
