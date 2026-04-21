export default function LoadingGrid() {
	return (
		<div
			role="status"
			aria-label="Loading animal data"
			className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
		>
			{Array.from({ length: 8 }).map((_, i) => (
				<div
					key={i}
					className="bg-white rounded-xl shadow-sm p-5 animate-pulse"
				>
					<div className="flex items-start justify-between mb-4">
						<div className="w-12 h-12 bg-slate-200 rounded-lg" />
						<div className="w-20 h-5 bg-slate-200 rounded-full" />
					</div>
					<div className="w-24 h-5 bg-slate-200 rounded mb-1" />
					<div className="w-32 h-4 bg-slate-100 rounded mb-4" />
					<div className="space-y-3">
						{[0, 1, 2].map((j) => (
							<div key={j} className="space-y-1">
								<div className="flex justify-between">
									<div className="w-12 h-3 bg-slate-100 rounded" />
									<div className="w-8 h-3 bg-slate-100 rounded" />
								</div>
								<div className="h-2 bg-slate-100 rounded-full" />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
