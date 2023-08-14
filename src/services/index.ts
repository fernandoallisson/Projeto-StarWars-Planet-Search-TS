const BASE_URL = 'https://swapi.dev/api/planets/?format=json';

// Salvar os filmes sem a chave residents
export const fetchPlanets = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const { results } = data;

  const planets = results.map((planet:any) => {
    const { residents, ...rest } = planet;
    return rest;
  });

  return planets;
};
