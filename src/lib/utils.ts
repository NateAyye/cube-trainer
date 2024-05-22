import { clsx, type ClassValue } from "clsx";
import { generateScramble } from "react-rubiks-cube-utils";
import { twMerge } from "tailwind-merge";
import type { CubingEvent } from "~/types/cubing";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNewScramble(event: CubingEvent) {
  return generateScramble({ type: event });
}
