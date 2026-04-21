import type { z } from "zod";
import type {
  AnimalSchema,
  AnimalStatusSchema,
  AnimalsResponseSchema,
} from "@/schemas/animal";

export type AnimalStatus = z.infer<typeof AnimalStatusSchema>;
export type Animal = z.infer<typeof AnimalSchema>;
export type AnimalsResponse = z.infer<typeof AnimalsResponseSchema>;
