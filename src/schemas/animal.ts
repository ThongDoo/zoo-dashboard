import { z } from "zod"

export const AnimalStatusSchema = z.object({
	hunger: z.number().int().min(0).max(100),
	thirst: z.number().int().min(0).max(100),
	hygiene: z.number().int().min(0).max(100),
})

export const AnimalSchema = z.object({
	id: z.string(),
	name: z.string(),
	species: z.string(),
	age: z.number().int().positive(),
	status: AnimalStatusSchema,
	lastCare: z.iso.datetime(),
})

export const AnimalsResponseSchema = z.object({
	animals: z.array(AnimalSchema),
	generatedAt: z.iso.datetime(),
})
