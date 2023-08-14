import { createContext } from 'react';

export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  url: string;
  created: string;
  edited: string;
  setPlanets: (planets: PlanetType[]) => void;
};

export const PlanetsContext = createContext({
  planets: [],
} as {
  planets: PlanetType[];
});
