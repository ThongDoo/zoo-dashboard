import { z } from "zod"

export const AnimalStatusSchema = z.object({
	hunger: z.number().int().min(0).max(100),
	thirst: z.number().int().min(0).max(100),
	hygiene: z.number().int().min(0).max(100),
})

// Matches Next.js `StaticImageData` — the shape produced by statically
// importing a local image (`import icon from './icon.svg'`). We validate it
// because icons travel through the API response as JSON.
export const AnimalIconSchema = z.object({
	src: z.string(),
	width: z.number(),
	height: z.number(),
})

export const AnimalSchema = z.object({
	id: z.string(),
	name: z.string(),
	species: z.string(),
	icon: AnimalIconSchema,
	age: z.number().int().positive(),
	status: AnimalStatusSchema,
	lastFed: z.iso.datetime(),
})

export const AnimalsResponseSchema = z.object({
	animals: z.array(AnimalSchema),
	generatedAt: z.string().datetime(),
})
