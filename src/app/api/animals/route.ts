import { NextResponse } from "next/server";
import { generateAnimals } from "@/utils/generateAnimals";

export async function GET() {
  const animals = generateAnimals();

  return NextResponse.json({
    animals,
    generatedAt: new Date().toISOString(),
  });
}
