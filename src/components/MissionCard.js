import React from 'react';
import PropTypes from 'prop-types';
import './styles/MissionCard.css';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;

    return (
      <div className="Mission-card-content" data-testid="mission-card">
        <p
          className="Mission-card-name"
          data-testid="mission-name"
        >
          { name }
        </p>
        <p
          className="Mission-card-year"
          data-testid="mission-year"
        >
          { year }
        </p>
        <p
          className="Mission-card-country"
          data-testid="mission-country"
        >
          { country }
        </p>
        <p
          className="Mission-card-destination"
          data-testid="mission-destination"
        >
          { destination }
        </p>
        <hr style={ { gridArea: 'line' } } />
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
