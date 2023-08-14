import { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/context';

const INITIAL_FILTER = {
  column: 'population',
  comparison: 'maior que',
  value: 0,
};

type Filter = {
  column: string,
  comparison: string,
  value: number,
};
export function Table() {
  const { planets } = useContext(PlanetsContext);
  const [planetList, setPlanetList] = useState(planets);

  // GUARDAR OS FILTROS NUMERICOS
  const [listFilter, setListFilter] = useState<Filter[]>([]);
  const [filter, setFilter] = useState<Filter>(INITIAL_FILTER);

  useEffect(() => {
    setPlanetList(planets);
  }, [planets]);

  const filterPlanets = (event: any) => {
    const { value } = event.target;
    const filteredPlanets = planets.filter((planet) => planet.name.includes(value));
    setPlanetList(filteredPlanets);
  };

  const handleFilter = () => {
    const newFilterList = [...listFilter, filter];

    // Aplique os filtros remanescentes à lista de planetas
    let filteredPlanets = planets;
    newFilterList.forEach((item) => {
      filteredPlanets = filteredPlanets.filter((planet: any) => {
        if (item.comparison === 'maior que') {
          return Number(planet[item.column]) > item.value;
        }
        if (item.comparison === 'menor que') {
          return Number(planet[item.column]) < item.value;
        }
        if (item.comparison === 'igual a') {
          return Number(planet[item.column]) === item.value;
        }
        return true;
      });
    });

    if (newFilterList.length === 0) {
      filteredPlanets = planets;
    }
    setPlanetList(filteredPlanets);
    setListFilter(newFilterList);
  };

  const hanleClickCleanFilter = (item: Filter) => {
    const newFilterList = listFilter.filter((filterItem) => (
      filterItem.column !== item.column
      || filterItem.comparison !== item.comparison
      || filterItem.value !== item.value
    ));

    // Aplique os filtros remanescentes à lista de planetas
    let filteredPlanets = planets;
    newFilterList.forEach((filterItem) => {
      filteredPlanets = filteredPlanets.filter((planet: any) => {
        if (filterItem.comparison === 'maior que') {
          return Number(planet[filterItem.column]) > Number(filterItem.value);
        }
        if (filterItem.comparison === 'menor que') {
          return Number(planet[filterItem.column]) < Number(filterItem.value);
        }
        if (filterItem.comparison === 'igual a') {
          return Number(planet[filterItem.column]) === Number(filterItem.value);
        }
        return true;
      });
    });

    setPlanetList(filteredPlanets);
    setListFilter(newFilterList);
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
        onChange={ (event) => setFilter(
          { ...filter, value: Number(event.target.value) },
        ) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilter }
      >
        Filtrar
      </button>

      {/* Listagem de filtros numericos filtrados com botão para apagar que deve remover o item também */}
      <h2>Filtros</h2>
      <div>
        {listFilter.map((item) => (
          <div key={ item.column }>
            <span>{`${item.column} ${item.comparison} ${item.value}`}</span>
            <button
              type="button"
              onClick={ () => hanleClickCleanFilter(item) }
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

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
