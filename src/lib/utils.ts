import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function HandleError(error: unknown) {
  console.error(error)
  throw new Error(typeof error === "string" ? error : JSON.stringify(error))
}
