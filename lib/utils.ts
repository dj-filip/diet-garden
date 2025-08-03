import { Grocery } from "@/models/groceryModel"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toGrocery(rawGrocery: Grocery[]) {
  return rawGrocery.map(({ _id, name, fdcid, category, nutrients, image }) => ({
    id: _id.toString(),
    name,
    fdcid,
    category,
    nutrients,
    image
  }))
}


export function toFormGrocery(rawGrocery: Grocery | null) {

  if (!rawGrocery) return null;

  const { _id, name, fdcid, category, image } = rawGrocery

  return {
    id: _id.toString(),
    name: name,
    fdcid,
    category,
    image
  }
}