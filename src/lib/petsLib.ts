import PETS from "./pets.json";

export type typePets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  slug: string;
  fun_fact: string;
  image?: string;
};

export function getPets(): typePets[] {
  return PETS;
}

export function findPetBySlug(slug: string) {
  return PETS.find((pet) => pet.slug === slug);
}
