"use client"
// QueryClientProvider requires React context, which is a client-side runtime feature.
// Only the provider wrapper itself needs the client boundary.
// All children can remain Server components;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState, type ReactNode } from "react"

interface ProvidersProps {
	children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
	// useState ensures a single QueryClient instance per browser session rather
	// than a shared instance across all server renders.
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 2,
						retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 10_000),
					},
				},
			}),
	)

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
