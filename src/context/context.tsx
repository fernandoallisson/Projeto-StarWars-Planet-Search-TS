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
};

const filters = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const PlanetsContext = createContext({
  planets: [],
} as {
  planets: PlanetType[];
});

export const FilterContext = createContext({
  filtersColumn: filters,
  setFilters: (filter: string[]) => {
    return filter;
  },
} as {
  filtersColumn: string[];
  setFilters: (filter: string[]) => void;
});
