import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

// Iniciando projeto
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <PlanetCard planetName="" planetImage="" />
      </div>
    );
  }
}

export default App;
