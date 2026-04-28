import type { StaticImageData } from "next/image"

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

const SPECIES_ICONS: Record<string, StaticImageData> = {
	Bear: bearIcon,
	Bird: birdIcon,
	Deer: deerIcon,
	Dolphin: dolphinIcon,
	Elephant: elephantIcon,
	Giraffe: giraffeIcon,
	Gorilla: gorillaIcon,
	Hedgehog: hedgehogIcon,
	Hippo: hippoIcon,
	Kangaroo: kangarooIcon,
	Lion: lionIcon,
	Monkey: monkeyIcon,
	Owl: owlIcon,
	Panda: pandaIcon,
	Penguin: penguinIcon,
	"Polar Bear": polarBearIcon,
	Tiger: tigerIcon,
	Turtle: turtleIcon,
	Zebra: zebraIcon,
}

export function getAnimalIcon(species: string): StaticImageData | undefined {
	return SPECIES_ICONS[species]
}
