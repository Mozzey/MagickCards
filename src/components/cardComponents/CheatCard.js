import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cheatCard.css';

class CheatCard extends Component {
  render() {
    const { title, description, example } = this.props.cheatCard;

    return (
      <div className="card-container">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        <small>{example}</small>
      </div>
    );
  }
}

CheatCard.propTypes = {
  cheatCard: PropTypes.object.isRequired
};

export default CheatCard;
