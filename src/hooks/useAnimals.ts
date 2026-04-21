import { useQuery } from "@tanstack/react-query";
import { AnimalsResponseSchema } from "@/schemas/animal";
import type { AnimalsResponse } from "@/types/animal";

async function fetchAnimals(): Promise<AnimalsResponse> {
  const res = await fetch("/api/animals");
  if (!res.ok) {
    throw new Error(`Failed to fetch animal data (${res.status})`);
  }
  const json = await res.json();
  // Validate the API response shape at runtime with Zod
  return AnimalsResponseSchema.parse(json);
}

export function useAnimals() {
  return useQuery<AnimalsResponse, Error>({
    queryKey: ["animals"],
    queryFn: fetchAnimals,
    refetchInterval: 60_000,
    staleTime: 55_000,
  });
}
