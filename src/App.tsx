import { useEffect, useState } from 'react';
import { PlanetsContext } from './context/context';
import { fetchPlanets } from './services/index';

import './App.css';
import { Table } from './components/Table';

function App() {
  const [planets, setPlanets] = useState([]);

  const getPlanets = async () => {
    const planetsList = await fetchPlanets();
    setPlanets(planetsList);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      <Table />
    </PlanetsContext.Provider>
  );
}

export default App;
