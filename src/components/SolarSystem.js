import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="Planets-content">
          {
            planets.map((planet) => (
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
                key={ planet.name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
