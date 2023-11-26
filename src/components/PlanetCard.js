import React from 'react';
import PropTypes from 'prop-types';
import './styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div
        className="Planets-card-content"
        data-testid="planet-card"
      >
        <img
          className={ `Planets-card-image Planets-card-image-${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
