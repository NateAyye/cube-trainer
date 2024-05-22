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

export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("copied");
    })
    .catch(() => {
      throw new Error("Something went wrong");
    });
}
