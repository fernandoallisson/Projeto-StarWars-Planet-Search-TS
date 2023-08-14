import { useEffect, useState } from 'react';
import { PlanetType, PlanetsContext } from './context/context';
import { fetchPlanets } from './services/index';

import './App.css';
import { Planets } from './pages/Planets';

function App() {
  const [planets, setPlanets] = useState<PlanetType[]>([]);

  const getPlanets = async () => {
    const planetsList = await fetchPlanets();
    setPlanets(planetsList);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { planets } }>
      <Planets />
    </PlanetsContext.Provider>
  );
}

export default App;
