import { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/context';

export function Table() {
  const { planets } = useContext(PlanetsContext);
  const [planetList, setPlanetList] = useState(planets);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    setPlanetList(planets);
  }, [planets]);

  const filterPlanets = (event: any) => {
    const { value } = event.target;
    const filteredPlanets = planets.filter((planet) => planet.name.includes(value));
    setPlanetList(filteredPlanets);
  };

  const handleFilter = () => {
    const { column, comparison, value } = filter;
    const filteredPlanets = planets.filter((planet: any) => {
      if (comparison === 'maior que') {
        return Number(planet[column]) > value;
      }
      if (comparison === 'menor que') {
        return Number(planet[column]) < value;
      }
      if (comparison === 'igual a') {
        return Number(planet[column]) === value;
      }
      return planet;
    });
    setPlanetList(filteredPlanets);
  };

  return (
    <div id="table-planets">
      {/* input para filtrar por nome */}
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ filterPlanets }
      />
      {/* input para filtrar pelos valores númericos */}
      <select
        data-testid="column-filter"
        onChange={ (event) => setFilter({ ...filter, column: event.target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setFilter({ ...filter, comparison: event.target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        placeholder="Valor"
        defaultValue={ 0 }
        data-testid="value-filter"
        onChange={ (event) => (
          setFilter({ ...filter, value: Number(event.target.value) })
        ) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Período de Rotação</th>
            <th>Período Orbital</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Terreno</th>
            <th>Superfície da Água</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Criado</th>
            <th>Editado</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planetList.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
