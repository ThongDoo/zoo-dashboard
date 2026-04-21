import type { Animal } from "@/types/animal"

const ANIMAL_TEMPLATES = [
	{ name: "Simba", species: "Lion", emoji: "🦁" },
	{ name: "Dumbo", species: "Elephant", emoji: "🐘" },
	{ name: "Marty", species: "Zebra", emoji: "🦓" },
	{ name: "Gloria", species: "Hippopotamus", emoji: "🦛" },
	{ name: "Harambe", species: "Gorilla", emoji: "🦍" },
	{ name: "Kowalski", species: "Penguin", emoji: "🐧" },
	{ name: "Tigger", species: "Tiger", emoji: "🐯" },
	{ name: "Melman", species: "Giraffe", emoji: "🦒" },
	{ name: "Po", species: "Panda", emoji: "🐼" },
	{ name: "Rico", species: "Penguin", emoji: "🐧" },
	{ name: "Professor", species: "Owl", emoji: "🦉" },
	{ name: "Coco", species: "Bird", emoji: "🦜" },
	{ name: "Oogway", species: "Tortoise", emoji: "🐢" },
	{ name: "Frosty", species: "Polar Bear", emoji: "🐻‍❄️" },
	{ name: "Joey", species: "Kangaroo", emoji: "🦘" },
	{ name: "Moby Dick", species: "Dolphin", emoji: "🐬" },
	{ name: "Baloo", species: "Bear", emoji: "🐻" },
	{ name: "Rafiki", species: "Monkey", emoji: "🐒" },
	{ name: "Pumbaa", species: "Warthog", emoji: "🐗" },
	{ name: "Bambi", species: "Deer", emoji: "🦌" },
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
		lastFed: new Date(
			Date.now() - randomInt(0, 8) * 60 * 60 * 1000,
		).toISOString(),
	}))
}
