import React from 'react';
import PropTypes from 'prop-types';
import './styles/Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="Title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
