import type { StaticImageData } from "next/image"
import type { Animal } from "@/types/animal"

import bearIcon from "@/assets/icons/animals/bear.svg"
import birdIcon from "@/assets/icons/animals/bird.svg"
import deerIcon from "@/assets/icons/animals/deer.svg"
import dolphinIcon from "@/assets/icons/animals/dolphin.svg"
import elephantIcon from "@/assets/icons/animals/elephant.svg"
import giraffeIcon from "@/assets/icons/animals/giraffe.svg"
import gorillaIcon from "@/assets/icons/animals/gorilla.svg"
import hedgehogIcon from "@/assets/icons/animals/hedgehog.svg"
import hippoIcon from "@/assets/icons/animals/hippo.svg"
import kangarooIcon from "@/assets/icons/animals/kangaroo.svg"
import lionIcon from "@/assets/icons/animals/lion.svg"
import monkeyIcon from "@/assets/icons/animals/monkey.svg"
import owlIcon from "@/assets/icons/animals/owl.svg"
import pandaIcon from "@/assets/icons/animals/panda.svg"
import penguinIcon from "@/assets/icons/animals/penguin.svg"
import polarBearIcon from "@/assets/icons/animals/polar-bear.svg"
import tigerIcon from "@/assets/icons/animals/tiger.svg"
import turtleIcon from "@/assets/icons/animals/turtle.svg"
import zebraIcon from "@/assets/icons/animals/zebra.svg"

const ANIMAL_TEMPLATES: Array<{
	name: string
	species: string
	icon: StaticImageData
}> = [
	{ name: "Simba", species: "Lion", icon: lionIcon },
	{ name: "Dumbo", species: "Elephant", icon: elephantIcon },
	{ name: "Marty", species: "Zebra", icon: zebraIcon },
	{ name: "Gloria", species: "Hippo", icon: hippoIcon },
	{ name: "Harambe", species: "Gorilla", icon: gorillaIcon },
	{ name: "Kowalski", species: "Penguin", icon: penguinIcon },
	{ name: "Tigger", species: "Tiger", icon: tigerIcon },
	{ name: "Melman", species: "Giraffe", icon: giraffeIcon },
	{ name: "Po", species: "Panda", icon: pandaIcon },
	{ name: "Rico", species: "Penguin", icon: penguinIcon },
	{ name: "Professor", species: "Owl", icon: owlIcon },
	{ name: "Coco", species: "Bird", icon: birdIcon },
	{ name: "Oogway", species: "Turtle", icon: turtleIcon },
	{ name: "Frosty", species: "Polar Bear", icon: polarBearIcon },
	{ name: "Joey", species: "Kangaroo", icon: kangarooIcon },
	{ name: "Moby Dick", species: "Dolphin", icon: dolphinIcon },
	{ name: "Baloo", species: "Bear", icon: bearIcon },
	{ name: "Rafiki", species: "Monkey", icon: monkeyIcon },
	{ name: "Sonic", species: "Hedgehog", icon: hedgehogIcon },
	{ name: "Bambi", species: "Deer", icon: deerIcon },
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
