import type { Animal } from "@/types/animal"

const ANIMAL_TEMPLATES: Array<{
	name: string
	species: string
}> = [
	{ name: "Simba", species: "Lion" },
	{ name: "Dumbo", species: "Elephant" },
	{ name: "Marty", species: "Zebra" },
	{ name: "Gloria", species: "Hippo" },
	{ name: "Harambe", species: "Gorilla" },
	{ name: "Kowalski", species: "Penguin" },
	{ name: "Tigger", species: "Tiger" },
	{ name: "Melman", species: "Giraffe" },
	{ name: "Po", species: "Panda" },
	{ name: "Rico", species: "Penguin" },
	{ name: "Professor", species: "Owl" },
	{ name: "Coco", species: "Bird" },
	{ name: "Oogway", species: "Turtle" },
	{ name: "Frosty", species: "Polar Bear" },
	{ name: "Joey", species: "Kangaroo" },
	{ name: "Moby Dick", species: "Dolphin" },
	{ name: "Baloo", species: "Bear" },
	{ name: "Rafiki", species: "Monkey" },
	{ name: "Sonic", species: "Hedgehog" },
	{ name: "Bambi", species: "Deer" },
]

function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export function generateAnimals(): Animal[] {
	return ANIMAL_TEMPLATES.map((template, index) => ({
		id: `animal-${index}`,
		...template,
		age: randomInt(2, 18),
		status: {
			hunger: randomInt(0, 100),
			thirst: randomInt(0, 100),
			hygiene: randomInt(0, 100),
		},
		lastCare: new Date(
			Date.now() - randomInt(0, 8) * 60 * 60 * 1000,
		).toISOString(),
	}))
}
