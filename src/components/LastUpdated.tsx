"use client"

import { useEffect, useState } from "react"

interface LastUpdatedProps {
	timestamp: number
}

export default function LastUpdated({ timestamp }: LastUpdatedProps) {
	const [text, setText] = useState("just now")

	// Uses useEffect + setInterval to update the "X seconds ago" text every second.
	// Live DOM updates require the client boundary.
	useEffect(() => {
		const update = () => {
			const diffSecs = Math.floor((Date.now() - timestamp) / 1000)
			if (diffSecs < 5) setText("just now")
			else if (diffSecs < 60) setText(`${diffSecs}s ago`)
			else setText(`${Math.floor(diffSecs / 60)}m ago`)
		}

		update()
		const id = setInterval(update, 1000)
		return () => clearInterval(id)
	}, [timestamp])

	return (
		<span className="text-sm text-slate-400">
			Updated <span className="font-medium text-slate-500">{text}</span>
		</span>
	)
}
