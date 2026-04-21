"use client"

interface ErrorMessageProps {
	message: string
	onRetry: () => void
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
	return (
		<div
			role="alert"
			className="flex flex-col items-center justify-center gap-4 py-20 text-center"
		>
			<span className="text-5xl">⚠️</span>
			<div>
				<h2 className="text-lg font-semibold text-slate-800 mb-1">
					Unable to load animal data
				</h2>
				<p className="text-sm text-slate-500 max-w-sm">{message}</p>
			</div>
			{/* Calls the onRetry callback on click. Event handlers require the client boundary. */}
			<button
				onClick={onRetry}
				className="mt-2 px-5 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-700 active:scale-95 transition-all"
			>
				Try again
			</button>
		</div>
	)
}
