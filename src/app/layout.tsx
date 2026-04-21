// Root layout is a Server component as it only provides HTML structure
// and injects the client-boundary Providers wrapper;

import type { Metadata } from "next"
import Providers from "@/app/providers"
import "./globals.css"

export const metadata: Metadata = {
	title: "Zoo Dashboard",
	description: "Live animal monitoring",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
