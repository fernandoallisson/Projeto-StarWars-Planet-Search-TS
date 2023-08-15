import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PlanetsContext } from '../context/context';
import { Table } from '../components/Table';

describe('Testes do componente Table', () => {
  const mockPlanets = [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/4/',
        'https://swapi.dev/api/films/5/',
        'https://swapi.dev/api/films/6/',
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi.dev/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/6/',
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi.dev/api/planets/2/',
    },
  ]

  it('Teste se o componente Table renderiza corretamente', () => {
    render(
      <PlanetsContext.Provider value={{ planets: mockPlanets }}>
        <Table />
      </PlanetsContext.Provider>
    );

    const nameColumn = screen.getByText('Nome');
    expect(nameColumn).toBeInTheDocument();

    const rotationPeriodColumn = screen.getByText('Período de Rotação');
    expect(rotationPeriodColumn).toBeInTheDocument();
  });

  it('Teste de filtragem por nome', () => {
    // Renderize o componente Table com os valores necessários do contexto simulado
    render(
      <PlanetsContext.Provider value={{ planets: mockPlanets }}>
        <Table />
      </PlanetsContext.Provider>
    );

    // Simule a digitação no input de filtro por nome
    const input = screen.getByTestId('name-filter');
    fireEvent.change(input, { target: { value: 'raan' } });

    // Verifique se o planeta filtrado é exibido na tabela
    const planetRow = screen.getByText('Alderaan');
    expect(planetRow).toBeInTheDocument();

    // Verifique se o planeta não filtrado não é exibido na tabela
    const planetRow2 = screen.queryByText('Tatooine');
    expect(planetRow2).not.toBeInTheDocument();
  });

  it('Teste de filtragem por valor numérico', async () => {
    render(
      <PlanetsContext.Provider value={{ planets: mockPlanets }}>
        <Table />
      </PlanetsContext.Provider>
    );
  
    const columnSelect = screen.getByTestId('column-filter');
    fireEvent.change(columnSelect, { target: { value: /population/i } });
  
    const comparisonSelect = screen.getByTestId('comparison-filter');
    fireEvent.change(comparisonSelect, { target: { value: /maior que/i } });
  
    const valueInput = screen.getByTestId('value-filter');
    fireEvent.change(valueInput, { target: { value: '20000' } });
  
    const filterButton = screen.getByTestId('button-filter');
    fireEvent.click(filterButton);

    await waitFor(() => {
      const planetRow = screen.getByText(/Alderaan/i);
      expect(planetRow).toBeInTheDocument();
    });
  });
  

  it('Teste de remoção de filtro', () => {
    render(
      <PlanetsContext.Provider value={{ planets: mockPlanets }}>
        <Table />
      </PlanetsContext.Provider>
    );

    const columnSelect = screen.getByTestId('column-filter');
    fireEvent.change(columnSelect, { target: { value: 'population' } });

    const removeFilterButton = screen.getByTestId('button-filter');
    fireEvent.click(removeFilterButton);

    const planetRow1 = screen.getByText('Tatooine');
    const planetRow2 = screen.getByText('Alderaan');
    expect(planetRow1).toBeInTheDocument();
    expect(planetRow2).toBeInTheDocument();
  });
});



