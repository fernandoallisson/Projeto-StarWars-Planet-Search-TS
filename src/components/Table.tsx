import { useContext } from 'react';
import { PlanetsContext } from '../context/context';

export function Table() {
  const { planets } = useContext(PlanetsContext);

  return (
    <div id="table-planets">
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
          {planets.map((planet) => (
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
